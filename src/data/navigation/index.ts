import { Icons } from "open-icon";
import { WorkType } from "@/types";

export const navigationData: {
    name: string,
    link: string,
    items?: {
        label: string,
        icon: string,
        link?: string,
        value?: string | WorkType,

    }[]
}[]
    = [{
        name: 'About',
        link: '/about',
        items: [
            { label: 'About Me', link: '/about', icon: Icons.USER },
            { label: "Uses", link: '/uses', icon: Icons.LAPTOP },
            { label: "Curriculum Vitae", link: '/cv', icon: Icons.DOCUMENTS }
        ]
    }, {
        name: 'Work',
        link: '/work',
        items: [{
            label: "All",
            value: WorkType.ALL,
            icon: Icons.MORE,
            link: `/work/${WorkType.ALL}`
        }, {
            label: "Projects",
            value: WorkType.PROJECT,
            icon: Icons.WEBSITE,
            link: `/work/${WorkType.PROJECT}`
        }, {
            label: "Packages",
            value: WorkType.PACKAGE,
            icon: Icons.BOX,
            link: `/work/${WorkType.PACKAGE}`
        },
        // {
        //     label: "Icons",
        //     value: WorkType.ICONS,
        //     icon: Icons.SHAPE_SQUARE,
            // link: `/work/${WorkType.ICONS}`
        // }, 

        {
            label: "Photography",
            value: WorkType.PHOTOGRAPHY,
            icon: Icons.CAMERA,
            link: `/work/${WorkType.PHOTOGRAPHY}`
        },
        // {
        //     label: "Clients",
        //     value: WorkType.CLIENTS,
        //     icon: Icons.USER,
            // link: `/work/${WorkType.CLIENTS}`
        // }, 

        {
            label: "Logos",
            value: WorkType.LOGO,
            icon: Icons.PATH3,
            link: `/work/${WorkType.LOGO}`
        }]


    }, {
        name: 'Contact',
        link: '/contact',
        items: [{
            label: 'X',
            icon: Icons.BRAND_X,
            link: 'https://x.com/silvandiepen'
        }, {
            label: 'Facebook', 
            icon: Icons.BRAND_FACEBOOK,
            link: 'https://facebook.com/silvandiepen'
        }, {
            label: 'LinkedIn',
            icon: Icons.BRAND_LINKEDIN,
            link: 'https://linkedin.com/in/silvandiepen'
        }, {
            label: 'Instagram', 
            icon: Icons.BRAND_INSTAGRAM,
            link: 'https://instagram.com/silvandiepen'
        }, {
            label: 'GitHub',
            icon: Icons.BRAND_GITHUB,
            link: 'http://github.com/silvandiepen'
        }, {
            label: 'CodePen',
            icon: Icons.BRAND_CODEPEN,
            link: 'http://codepen.io/silvandiepen'
        }]
    }]

