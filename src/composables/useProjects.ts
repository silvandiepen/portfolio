import { retrieveState, watchState } from "@sil/storage"
import { reactive, computed } from "vue"

import { project as ProjectData } from "@/data/projects"
import { Project, ProjectType, Tag } from "@/types";


interface ProjectState {
    projects: Project[]
    filters: {
        search: string,
        tag: Tag | null,
        type: ProjectType
    }
}
const projectState = reactive<ProjectState>(await retrieveState({
    projects: [],
    filters: {
        search: '',
        tag: null,
        type: ProjectType.ALL
    }
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
        init();

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

        return projects;

    })

    const init = () => {
        // if (projectState.projects.length === 0) {
        projectState.projects = ProjectData.map((project: Project) => {
            return {
                ...project,
                slug: project.title.toLowerCase().replace(/ /g, '-'),
                tags: project.tags.map((tag: string) => tag.toLowerCase())
            }
        });
        // }
    }
    const tags = computed(() => {
        init();
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