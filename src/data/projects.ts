import { Icons, Project, ProjectType } from "@/types";

export const project: Project[] = [
    {
        title: 'VAT Calculator',
        description: "VAT is a simple tool that converts values with and without a percentage of tax, allowing users to quickly calculate amounts with or without taxes. It's a convenient tool for individuals and businesses alike, making tax calculations hassle-free.",
        summary: "Calculate values with or without VAT easily with this convenient tool.",
        tags: ['web-development', 'javascript', 'tax', 'calculator', 'financial', 'business', 'utility', 'tool'],
        type: ProjectType.PROJECT,
        link: "https://vat.sil.mt/",
        color: "rgb(245, 166, 35)",
        icon:   Icons.PERCENTAGE
    },
    {
        title: "Balcony",
        description: "Balcony allows users to customize and visualize Maltese balconies by changing colors and window quantities, serving as a simple tool for selecting colors. Whether you're an architect, homeowner, or interior designer, Balcony offers a user-friendly way to experiment with different balcony designs.",
        summary: "Customize and visualize Maltese balconies with ease using this user-friendly tool.",
        tags: ['web-development', 'javascript', 'css', 'visualizer', 'architecture', 'design', 'home-improvement', 'interior-design'],
        type: ProjectType.PROJECT,
        link: "https://balcony.sil.mt/",
        color:"#46a058",
        icon: Icons.GALERIJA
    },

    {
        title: "Gradient",
        description: "Gradient is a versatile tool that helps developers create CSS gradients with customizable steps and directions for linear, radial, and conic gradients. Whether you're designing a website or application, Gradient simplifies the process of generating attractive gradient styles with precision.",
        summary: "Generate CSS gradients effortlessly with customizable options using this handy tool.",
        tags: ['web-development', 'css', 'design', 'styling', 'web-design', 'frontend', 'developer-tools', 'ui'],
        type: ProjectType.PROJECT,
        link: "https://gradient.sil.mt/",
        color: ["#f25d5d", "#ffe058","#00ffaa"],


    },
    {
        title: "Open Icon",
        description: "Open Icon is a foundation that provides a comprehensive set of icons freely available for use by developers and designers. With a constantly expanding library of icons and an open-source approach, Open Icon is an invaluable resource for projects of all sizes, offering flexibility and convenience.",
        summary: "Access a vast collection of free icons for your projects with this open-source library.",
        tags: ['web-development', 'design', 'open-source', 'icons', 'resource', 'frontend', 'developer-tools', 'ui'],
        type: ProjectType.PROJECT,
        link: "https://open-icon.org",
        icon: [Icons.ROCKET, Icons.ARROW_DOWN_RIGHT, Icons.HEART, Icons.SMILE],
        npm: "open-icon",
        color: "#ffcd03"
    },
    {
        title: "Billy",
        description: "Billy is a user-friendly tool for creating invoices that saves data locally, ensuring privacy and security. With features for managing contacts and adding items with multiple tax rates, Billy streamlines the invoicing process for freelancers and small businesses, providing a hassle-free solution for billing needs.",
        summary: "Effortlessly create and manage invoices with this secure and privacy-focused tool.",
        tags: ['business', 'productivity', 'web-development', 'finance', 'invoicing', 'billing', 'utility', 'tool'],
        type: ProjectType.PROJECT,
        link: "https://billy.sil.mt/",
        color: "#1aa8cc",
        icon: Icons.COWBOY_HAT
    },
    {
        title: "Waves",
        description: "Waves is a simple tool for generating clip-path waves for web projects, allowing developers to create customized vector-based waves quickly and easily. With configurable parameters, Waves enables users to generate unique wave shapes suitable for various design requirements, making it a valuable asset for web development.",
        summary: "Create custom clip-path waves effortlessly for your web projects with this intuitive tool.",
        tags: ['web-development', 'css', 'design', 'graphics', 'frontend', 'developer-tools', 'ui', 'web-graphics'],
        type: ProjectType.PROJECT,
        link: "https://waves.sil.mt/",
        color: "#200734",
        icon: Icons.WAVES
    },
    {
        title: "Recipes",
        description: "Recipes is a personal recipe repository created by the developer, serving as a reference for various recipes and cooking-related information. While primarily intended as a personal resource, Recipes is publicly accessible, allowing others to explore and discover new recipes. With a simple and user-friendly interface, Recipes provides a convenient platform for organizing and sharing culinary creations.",
        summary: "Discover and explore a collection of recipes and cooking-related content with this user-friendly platform.",
        tags: ['cooking', 'recipes', 'food', 'recipe-sharing', 'nutrition', 'meal-planning', 'culinary', 'lifestyle'],
        type: ProjectType.PROJECT,
        link: "https://recipes.sil.mt/",
        color: "#000000",
        icon: Icons.KNIFE_FORK,
    },
    {
        title: "Trekker",
        description: "Trekker is a versatile tool designed to streamline package tracking by allowing users to input tracking codes for multiple packages and receive comprehensive updates in one place. Ideal for individuals expecting deliveries from various providers, Trekker offers convenience and efficiency by consolidating tracking information into a single resource, saving users time and effort.",
        summary: "Track your packages from multiple providers with ease using this comprehensive package tracking tool.",
        tags: ['logistics', 'tracking', 'delivery', 'shipping', 'ecommerce', 'utility', 'tool', 'shipment-tracking'],
        type: ProjectType.PROJECT,
        link: "https://trekker.sil.mt/",
        color: "hsl(265,80%,33%)",
        icon: [Icons.TRUCK, Icons.ARROW_RIGHT, Icons.HOME]
    },
    {
        title: "Locale",
        description: "Locale is a lightweight i18n (internationalization) tool designed for Vue.js websites, allowing developers to display content in multiple languages effortlessly. While still in the alpha phase, Locale provides basic functionality for integrating multilingual support into Vue.js projects, making it easier to create websites accessible to users worldwide.",
        summary: "Add multilingual support to your Vue.js website with this lightweight i18n tool.",
        tags: ['web-development', 'vue.js', 'i18n', 'internationalization', 'frontend', 'developer-tools', 'localization', 'utility'],
        type: ProjectType.PACKAGE,
        link: "https://locale.sil.mt",
        color: "#ffffff",
        icon: Icons.SPEECH_SQUARE_CHAT
    },
    {
        title: 'Storage',
        description: "Storage is a utility library for Vue.js projects that enables automatic state persistence to local storage, allowing developers to store website state data for later use. By providing a simple and efficient way to manage state persistence, Storage enhances user experience by preserving data between website visits, ensuring a seamless browsing experience.",
        summary: "Automatically persist state data to local storage in Vue.js projects with this efficient utility library.",
        tags: ['web-development', 'vue.js', 'state-management', 'frontend', 'developer-tools', 'data-management', 'utility', 'library'],
        type: ProjectType.PACKAGE,
        link: "https://storage.sil.mt",
        npm: "@sil/storage",
        color: "#ff99ff",
        icon: Icons.BOX_OPEN
    },
    {
        title: "Bemm",
        description: "Bemm is a lightweight JavaScript/TypeScript library for generating BEM (Block Element Modifier) class names in web components without any third-party dependencies. Offering a simple and flexible API, Bemm enables developers to maintain organized and maintainable code by generating consistent class names for blocks, elements, and modifiers, reducing the risk of naming conflicts and styling issues.",
        summary: "Generate BEM class names effortlessly in your web components with this lightweight library.",
        tags: ['web-development', 'css', 'javascript', 'typescript', 'frontend', 'developer-tools', 'component-styling', 'library'],
        type: ProjectType.PACKAGE,
        link: "https://bemm.sil.mt",
        npm: "bemm",
        color: "#ff9900",
        icon: [Icons.SHAPE_SQUARE_FILLED, Icons.UNDERSCORE,Icons.SHAPE_CIRCLE_FILLED, Icons.DOUBLE_DASH, Icons.SHAPE_QUARTER_CIRCLE],
    }, {
        title: "JSON input",
        description: "JSON input is a versatile validator and formatter for JSON code, providing developers with tools to validate, prettify, and visualize JSON objects effortlessly. With features such as error detection, prettification, and object visualization, JSON input streamlines JSON manipulation tasks, making it an invaluable tool for developers working with JSON data.",
        summary: "Validate, prettify, and visualize JSON code with this versatile tool for JSON manipulation.",
        tags: ['development', 'json', 'validator', 'formatter', 'frontend', 'developer-tools', 'data-management', 'utility'],
        type: ProjectType.PROJECT,
        link: "https://json-input.sil.mt",
        color: "#ffffff",
        icon: Icons.BRACKETS
    },
    {
        title: "Next Ferry",
        description: "Next Ferry is a convenient tool designed to provide real-time information on ferry schedules in Malta, allowing users to check the next available ferry departure times easily. With a user-friendly interface and up-to-date schedule information, Next Ferry helps commuters plan their journeys efficiently, ensuring a smooth and hassle-free travel experience.",
        summary: "Stay informed about the next ferry departure times in Malta with this user-friendly schedule tool.",
        tags: ['transportation', 'ferry', 'travel', 'malta', 'public-transport', 'schedules', 'frontend', 'utility'],
        type: ProjectType.PROJECT,
        link: "https://nextferry.mt",
        color: "hsl(282,71%,42%)",
        icon: Icons.FERRY
    },
    {
        title: "Icon Components",
        description: "Icon Components is a powerful tool for generating icon components directly from SVG files, offering developers the flexibility to customize and integrate icons seamlessly into their projects. With support for custom templates and versatile options, Icon Components simplifies the process of creating and managing icon libraries, making it an essential asset for web development.",
        summary: "Generate and manage icon components effortlessly with this versatile tool for SVG icon integration.",
        tags: ['web-development', 'icons', 'svg', 'components', 'frontend', 'developer-tools', 'library', 'ui'],
        type: ProjectType.PACKAGE,
        link: "https://icon-components.sil.mt",     
           icon: [Icons.PATH3, Icons.ARROW_RIGHT, Icons.DOCUMENT],

    },
    {
        title: "Case",
        description: "Case is a lightweight JavaScript/TypeScript library for generating consistent casing conventions in web applications. By providing simple and flexible APIs for converting text to various casing styles, Case helps developers maintain uniformity and readability in their codebases, enhancing code quality and developer productivity.",
        summary: "Ensure consistent casing conventions in your web applications with this lightweight JavaScript/TypeScript library.",
        tags: ['web-development', 'javascript', 'typescript', 'casing', 'frontend', 'developer-tools', 'library', 'utility'],
        type: ProjectType.PACKAGE,
        npm: "@sil/case",
        link: "https://case.sil.mt",
        icon: Icons.AA
    },
    {
        title: "Args",
        description: "Args is a versatile JavaScript/TypeScript library for parsing and validating command-line arguments in Node.js applications. With support for defining argument options and handling input validation, Args simplifies the process of processing command-line inputs, making it easier for developers to build robust and user-friendly command-line interfaces.",
        summary: "Simplify command-line argument parsing and validation in Node.js applications with this versatile library.",
        tags: ['node.js', 'javascript', 'typescript', 'command-line', 'backend', 'developer-tools', 'library', 'utility'],
        type: ProjectType.PACKAGE,
        link: "https://args.sil.mt",
        icon:Icons.BRACKETS
    },
    {
        title: "Gieter",
        description: "Gieter is a lightweight JavaScript/TypeScript library for generating static websites from Markdown files, offering developers a simple and efficient solution for creating content-rich websites with minimal configuration. By leveraging the power of Markdown and providing customizable templates, Gieter enables developers to build static websites quickly and easily, making it ideal for personal blogs, documentation sites, and more.",
        summary: "Create static websites from Markdown files effortlessly with this lightweight JavaScript/TypeScript library.",
        tags: ['web-development', 'markdown', 'static-site-generator', 'javascript', 'typescript', 'frontend', 'developer-tools', 'library'],
        type: ProjectType.PACKAGE,
        link: "https://gieter.sil.mt",
        icon: [Icons.HASHTAG_SLANTED, Icons.WATERING_CAN, Icons.WEBSITE]
    },
    {
        title: "CLI Block",
        description: "CLI Block is a collection of stylish and user-friendly command-line interface (CLI) components for enhancing the appearance of CLI-based applications. By providing customizable UI elements such as progress bars, spinners, and tables, CLI Block helps developers create visually appealing and intuitive command-line interfaces, improving user experience and productivity.",
        summary: "Enhance the appearance of your command-line applications with stylish UI components from this versatile library.",
        tags: ['cli', 'command-line', 'ui-components', 'javascript', 'typescript', 'backend', 'developer-tools', 'library'],
        type: ProjectType.PACKAGE,
        link: "https://cli-block.sil.mt",
        icon:[Icons.TERMINAL],
    },
    {
        title: "Iconator",
        description: "Iconator is a web-based tool for generating icon font files from SVG icons, allowing developers to create custom icon fonts tailored to their project requirements. With support for customizable settings and batch processing, Iconator simplifies the process of creating icon fonts, making it easy to incorporate scalable vector icons into web applications.",
        summary: "Create custom icon fonts from SVG icons effortlessly with this web-based tool.",
        tags: ['web-development', 'icons', 'svg', 'icon-fonts', 'frontend', 'developer-tools', 'utility', 'web-graphics'],
        type: ProjectType.PROJECT,
        link: "https://iconator.sil.mt",
        icon: [Icons.PATH3, Icons.ARROW_RIGHT, Icons.WEBSITE],
    },
    {
        title: "Markdown-IT Alert",
        description: "Markdown-IT Alert is a lightweight plugin for the Markdown-IT Markdown parser that adds support for creating alert messages in Markdown documents. By providing simple syntax for defining alert messages of different types (e.g., info, warning, error), Markdown-IT Alert enhances the readability and visual clarity of Markdown content, making it suitable for documenting important information and communicating messages effectively.",
        summary: "Enhance your Markdown documents with alert messages using this lightweight plugin for Markdown-IT.",
        tags: ['markdown', 'markdown-it', 'plugin', 'javascript', 'typescript', 'frontend', 'developer-tools', 'documentation'],
        type: ProjectType.PACKAGE,
        npm: "markdown-it-alert",
        link: "https://markdown-it-alert.sil.mt",
        icon: Icons.WARNING_TRIANGLE,
    },
    {
        title: "Markdown-IT Tasks",
        description: "Markdown-IT Tasks is a simple plugin for the Markdown-IT Markdown parser that adds support for creating task lists in Markdown documents. By providing intuitive syntax for defining tasks and checkboxes, Markdown-IT Tasks enables users to create interactive task lists within their Markdown content, making it suitable for managing tasks, to-do lists, and project workflows.",
        summary: "Add interactive task lists to your Markdown documents with this lightweight plugin for Markdown-IT.",
        tags: ['markdown', 'markdown-it', 'plugin', 'javascript', 'typescript', 'frontend', 'developer-tools', 'documentation'],
        type: ProjectType.PACKAGE,
        npm: "markdown-it-tasks",
        icon: Icons.LIST,
        link: "https://markdown-it-tasks.sil.mt",
    },
    {
        title: "Workbench",
        description: "Workbench is a versatile web-based tool for creating and managing code snippets, providing developers with a convenient platform for storing and sharing code snippets, snippets, and notes. With features such as syntax highlighting, version control, and collaborative editing, Workbench enhances productivity and collaboration among developers, making it an essential tool for teams and individuals alike.",
        summary: "Boost productivity and collaboration with this versatile web-based code snippet management tool.",
        tags: ['web-development', 'code-snippets', 'collaboration', 'productivity', 'frontend', 'developer-tools', 'utility', 'workflow'],
        type: ProjectType.PROJECT,
        link: "https://workbench.sil.mt/",
        icon: Icons.TOOLS
    },
    {
        title: "Sjape",
        description: "Sjape is a simple web-based tool for converting JSON data to TypeScript interfaces, providing developers with a quick and efficient way to generate TypeScript type definitions from JSON objects. With support for customizable settings and live previews, Sjape streamlines the process of creating TypeScript interfaces, making it easier for developers to work with JSON data in TypeScript projects.",
        summary: "Generate TypeScript interfaces from JSON data effortlessly with this simple web-based tool.",
        tags: ['web-development', 'typescript', 'json', 'typescript-interfaces', 'frontend', 'developer-tools', 'utility', 'data-management'],
        type: ProjectType.PROJECT,
        link: "https://sjape.sil.mt",
        icon: [Icons.SHAPE_CIRCLE, Icons.SHAPE_LEFT_TRIANGLE, Icons.SHAPE_SQUARE_FILLED],
    },
    {
        title: "Spleet",
        description: "Spleet is a lightweight web-based tool for splitting up long tweets into multiple tweets and automatically numbering them, providing users with an easy way to create tweet threads. With features such as automatic numbering, character count tracking, and preview functionality, Spleet simplifies the process of composing tweet threads, making it ideal for sharing longer thoughts and messages on Twitter.",
        summary: "Easily split up long tweets into numbered threads with this lightweight web-based tool.",
        tags: ['twitter', 'tweets', 'tweet-threads', 'social-media', 'communication', 'frontend', 'utility', 'web-tools'],
        type: ProjectType.PROJECT,
        link: "https://spleet.sil.mt",
        icon: Icons.ARROW_SPLIT
    },
    {
        title: "DE",
        description: "DE is a simple web-based tool for retrieving location information based on German car license plates, providing users with information about the city associated with a specific license plate. By entering a German car license plate, users can quickly determine the city where the vehicle is registered, making DE a useful resource for various applications, including automotive services and regulatory compliance.",
        summary: "Retrieve location information from German car license plates with this simple web-based tool.",
        tags: ['germany', 'license-plates', 'location', 'automotive', 'frontend', 'utility', 'web-tools', 'data-retrieval'],
        type: ProjectType.PROJECT,
        link: "https://de.sil.mt",
        icon: Icons.CAR
    }, {
        title: 'Color',
        summary: "Convert colors to all kind of types backwards and forwards",
        description: "Color is a versatile tool that helps developers convert colors to various formats, including HEX, RGB, HSL, and more. With support for color manipulation and conversion, Color simplifies the process of working with colors in web development, making it easier to create visually appealing and accessible designs.",
        tags: ['web-development', 'css', 'design', 'frontend', 'developer-tools', 'color-conversion', 'utility'],
        type: ProjectType.PACKAGE,
        link: "https://color.sil.mt",
        icon: Icons.BUCKET,
        npm: "@sil/color"
    }
];
