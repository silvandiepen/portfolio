import { Icons } from "open-icon";
export { Icons };

export const WorkType = {
    ALL: 'all',
    PROJECT: 'project',
    PACKAGE: 'package',
    ICONS: 'icons',
    LOGO: 'logo',
    PHOTOGRAPHY: 'photography',
    CLIENTS: 'clients',
};

export type WorkType = (typeof WorkType)[keyof typeof WorkType];

export interface Work {
    title: string;
    description: string;
    summary: string;
    tags: string[];
    type: WorkType;
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