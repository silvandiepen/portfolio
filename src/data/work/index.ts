

import { getLogos } from "./getLogo";
import { getPhotography } from "./getPhotography";
import { getProjects } from "./getProject";

export const getWork = async () => {

    const photographyProjects = await getPhotography();
    const logoProjects = await getLogos();
    const projects = await getProjects();

    return [
        ...(logoProjects || []),
        ...(photographyProjects || []),
        ...(projects || [])
    ];
}
