import { retrieveState, watchState } from "@sil/storage"
import { reactive, computed } from "vue"

import { getProjects } from "@/data/projects"
import { Project, ProjectType, Tag } from "@/types";
import { getColor } from "@/utils";


interface ProjectState {
    projects: Project[]
    filters: {
        search: string,
        tag: Tag | null,
        type: ProjectType
    }, lastLoad: number
}
const projectState = reactive<ProjectState>(await retrieveState({
    projects: [],
    filters: {
        search: '',
        tag: null,
        type: ProjectType.ALL
    },
    lastLoad: 0,
}, 'sil::projects'));

watchState(projectState, 'sil::projects');


const findIn = (needle: string, haystack: string): boolean => {

    return haystack.toLowerCase().includes(needle.toLowerCase());

}

interface ProjectWithCommon extends Project {
    commonTags: number
}

export const useProjects = () => {

    const getRelatedProjects = (projectSlug: string) => {
        const project = projectState.projects.find((p: Project) => p.slug === projectSlug);
        if (!project) return [];

        const relatedProjects = projectState.projects.map((p: Project) => {
            return {
                ...p,
                commonTags: project.tags.filter((tag: string) => p.tags.includes(tag)).length
            }
        }).filter((p: Project) => {
            return p.slug !== projectSlug
        }).sort((a: ProjectWithCommon, b: ProjectWithCommon) => {
            return b.commonTags - a.commonTags;
        }).splice(0, 3);

        return relatedProjects;




    };

    const projects = computed(() => {
        // init();

        let projects = projectState.projects;


        switch (projectState.filters.type) {
            case 'projects':
                projects = projects.filter((project: Project) => project.type === ProjectType.PROJECT);
                break;
            case 'packages':
                projects = projects.filter((project: Project) => project.type === ProjectType.PACKAGE);
                break;
            default:
            case ProjectType.ALL:
                break;
        }

        if (projectState.filters.tag !== null) {
            const label = projectState.filters.tag.label;
            projects = projects.filter((project: Project) => project.tags.includes(label));

        }

        if (projectState.filters.search !== '') {
            const { search } = projectState.filters;
            projects = projects.filter((project) => findIn(search, project.title) || findIn(search, project.description) || findIn(search, project.summary));


        }

        const randomOrderProjects = projects.sort(() => Math.random() - 0.5);

        return randomOrderProjects;

    })

    const loadProjects = async () => {

        // Timestamp in seconds 
        const currentTimeStamp = Math.floor(Date.now() / 1000);



        console.log(currentTimeStamp, projectState.lastLoad);

        projectState.lastLoad = currentTimeStamp;

        console.log('hi');

        const projectData = await getProjects();
        if (!projectData) return;

        projectState.projects = (Object.values(projectData) as Project[]).map((project: Project) => {
            return {
                ...project,
                slug: project.title.toLowerCase().replace(/ /g, '-'),
                tags: project.tags.map((tag: string) => tag.toLowerCase()),
                color: project.color || getColor().background

            }
        });

    }
    const tags = computed(() => {
        // init();
        let tags: Tag[] = [];
        projectState.projects.map((project: Project) => {
            project.tags.forEach((tag: string) => {
                if (!(tags.some((t: Tag) => t.label === tag))) {
                    tags.push({
                        label: tag,
                        occurance: 1
                    })
                } else {
                    tags.forEach((t: Tag) => {
                        if (t.label === tag) {
                            t.occurance++
                        }
                    })
                }
            })
        })

        return tags.sort((a: Tag, b: Tag) => {
            if (a.occurance > b.occurance) {
                return -1;
            }
            if (a.occurance < b.occurance) {
                return 1;
            }
            return 0;
        });

    })
    return {
        projects,
        loadProjects,
        getProject: (slug: string) => {
            return projectState.projects.find((project: Project) => project.slug === slug);
        },
        filter: computed({
            get() {
                return projectState.filters
            }, set(value: ProjectState['filters']) {
                projectState.filters = value
            }
        }),
        tags,
        getRelatedProjects
    }
}