import { retrieveState, watchState } from "@sil/storage"
import { reactive, computed } from "vue"

import { getWork } from "@/data/work"
import { Work, WorkType, Tag } from "@/types";
import { getColor } from "@/utils";


interface WorkState {
    work: Work[]
    filters: {
        search: string,
        tag: Tag | null,
        type: WorkType
    }, lastLoad: number
}
const workState = reactive<WorkState>(await retrieveState({
    work: [],
    filters: {
        search: '',
        tag: null,
        type: WorkType.ALL
    },
    lastLoad: 0,
}, 'sil::projects'));

watchState(workState, 'sil::work');


const findIn = (needle: string, haystack: string): boolean => {

    return haystack.toLowerCase().includes(needle.toLowerCase());

}

interface WorkWithCommon extends Work {
    commonTags: number
}

export const useWork = () => {

    const getRelatedWork = (workSlug: string) => {
        const project = workState.work.find((w: Work) => w.slug === workSlug);
        if (!project) return [];

        const relatedProjects = workState.work.map((w: Work) => {
            return {
                ...w,
                commonTags: w.tags.filter((tag: string) => w.tags.includes(tag)).length
            }
        }).filter((p: Work) => {
            return p.slug !== workSlug
        }).sort((a: WorkWithCommon, b: WorkWithCommon) => {
            return b.commonTags - a.commonTags;
        }).splice(0, 3);

        return relatedProjects;




    };

    const work = computed(() => {


        let items = workState.work;

        if (workState.filters.type) {
            items = items.filter((w: Work) => w.type === workState.filters.type);
        }

        if (workState.filters.tag !== null) {
            const label = workState.filters.tag.label;
            items = items.filter((w: Work) => w.tags.includes(label));

        }

        if (workState.filters.search !== '') {
            const { search } = workState.filters;
            items = items.filter((w) => findIn(search, w.title) || findIn(search, w.description) || findIn(search, w.summary));
        }

        const randomOrderWork = items.sort(() => Math.random() - 0.5);

        return randomOrderWork;

    })

    const loadWork = async () => {

        // Timestamp in seconds 
        const currentTimeStamp = Math.floor(Date.now() / 1000);



        console.log(currentTimeStamp, workState.lastLoad);

        workState.lastLoad = currentTimeStamp;

        console.log('hi');

        const workData = await getWork();
        if (!workData) return;

        workState.work = (Object.values(workData) as Work[]).map((item: Work) => {
            return {
                ...item,
                slug: item.title.toLowerCase().replace(/ /g, '-'),
                tags: item.tags.map((tag: string) => tag.toLowerCase()),
                color: item.color || getColor().background

            }
        });

    }
    const tags = computed(() => {
        // init();
        let tags: Tag[] = [];
        workState.work.map((w: Work) => {
            w.tags.forEach((tag: string) => {
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
        work,
        loadWork,
        getWork: (slug: string) => {
            return workState.work.find((w: Work) => w.slug === slug);
        },
        filter: computed({
            get() {
                return workState.filters
            }, set(value: WorkState['filters']) {
                workState.filters = value
            }
        }),
        tags,
        getRelatedWork
    }
}