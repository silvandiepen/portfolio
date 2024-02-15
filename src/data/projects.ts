export const ProjectType = {
    PROJECT: 'project',
    PACKAGE: 'package'
}
export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType];

export interface Project {
    title: string;
    description: string;
    type: ProjectType;
    link: string;
    npm?: string;
}

export const project: Project[] = [
    {
        title: 'VAT',
        description: "",
        type: ProjectType.PROJECT,
        link: "https://vat.sil.mt/"
    }, {
        title: "Balcony",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://balcony.sil.mt/"
    }, {
        title: "Gradient",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://gradient.sil.mt/"
    },
    {
        title: "Open Icon",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://open-icon.org",
        npm: "open-icon"

    },
    {
        title: "Billy",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://billy.sil.mt/"
    },
    {
        title: "Waves",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://waves.sil.mt/"
    },

    {
        title: "Recipes",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://recipes.sil.mt/"
    },
    {
        title: "Trekker",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://trekker.sil.mt/"
    },
    {
        title: "Locale",
        description: "",
        type: ProjectType.PACKAGE,
        npm: "@sil/locale",
        link: "https://locale.sil.mt"
    },
    {
        title: 'Storage',
        description: "",
        type: ProjectType.PACKAGE,
        link: "https://storage.sil.mt",
        npm: "@sil/storage"
    },
    {
        title: "Bemm",
        description: "",
        type: ProjectType.PACKAGE,
        link: "https://bemm.sil.mt",
        npm: "bemm"
    },
    {
        title: "JSON input",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://json-input.sil.mt"
    },
    {
        title: "Next Ferry",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://nextferry.mt"
    },
    {
        title: "Icon Components",
        description: "",
        type: ProjectType.PACKAGE,
        link: "https://icon-components.sil.mt",
    },
    {
        title: "Case",
        description: "",
        type: ProjectType.PACKAGE,
        link: "https://case.sil.mt",
    },
    {
        title: "Args",
        description: "",
        type: ProjectType.PACKAGE,
        link: "https://args.sil.mt",
    },
    {
        title: "Gieter",
        description: "",
        type: ProjectType.PACKAGE,
        link: "https://gieter.sil.mt",
    },
    {
        title: "CLI Block",
        description: "",
        type: ProjectType.PACKAGE,
        link: "https://cli-block.sil.mt",
    },
    {
        title: "Iconator",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://iconator.sil.mt",
    },
    {
        title: "Markdown-IT Alert",
        description: "",
        type: ProjectType.PACKAGE,
        npm: "markdown-it-alert",
        link: "https://markdown-it-alert.sil.mt",

    },
    {
        title: "Markdown-IT Tasks",
        description: "",
        type: ProjectType.PACKAGE,
        npm: "markdown-it-tasks",
        link: "https://markdown-it-tasks.sil.mt",

    }, {
        title: "Workbench",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://workbench.sil.mt/"
    }, {
        title: "Sjape",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://sjape.sil.mt",
    }, {
        title: "Spleet",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://spleet.sil.mt"
    },
    {
        title: "DE",
        description: "",
        type: ProjectType.PROJECT,
        link: "https://de.sil.mt"
    }

]