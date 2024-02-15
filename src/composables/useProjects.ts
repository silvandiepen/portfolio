import { retrieveState } from "@sil/storage"
import { reactive, computed } from "vue"

import { Project, ProjectType, project as ProjectData } from "@/data/projects"

const projectState = reactive<{
    projects: Project[]
}>(await retrieveState({
    projects: [],
}, 'projects'));


export const useProjects = () => {
    const getProjects = () => {
        init();
        return projectState.projects.filter((project: Project) => project.type === ProjectType.PROJECT)
    }
    const getPackages = () => {
        init();
        return projectState.projects.filter((project: Project) => project.type === ProjectType.PACKAGE)
    }
    const getAll = () => {
        init();
        return projectState.projects
    }
    const init = () => {
        if (projectState.projects.length === 0) {
            projectState.projects = ProjectData
        }
    }
    return {
        all: computed(() => getAll()),
        packages: computed(() => getPackages()),
        projects: computed(() => getProjects()),
    }
}