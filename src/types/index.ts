import { Icons } from "open-icon";
export { Icons };

export const ProjectType = {
    ALL: 'all',
    PROJECT: 'project',
    PACKAGE: 'package',
    ICONS: 'icons',
    LOGO: 'logo',
    PHOTOGRAPHY: 'photography',
    CLIENTS: 'clients',
};

export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType];

export interface Project {
    title: string;
    description: string;
    summary: string;
    tags: string[];
    type: ProjectType;
    image?:string;
    link?: string;
    npm?: string;
    slug?: string;
    color?: string | string[];
    icon?: Icons | Icons[]
    data?: [] | null
}
export interface Tag {
    label: string;
    occurance: number;
}