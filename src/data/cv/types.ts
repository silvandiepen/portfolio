const Technology = {
  FRONTEND_DEVELOPMENT: "Frontend Development",
  BACKEND_DEVELOPMENT: "Backend Development",
  DESIGN_TOOLS: "Design Tools",
  VERSION_CONTROL: "Version Control and Collaboration",
  DATABASES: "Databases",
  DEVOPS_INFRASTRUCTURE: "DevOps and Infrastructure",
  TESTING_QA: "Testing and QA",
  CSS_FRAMEWORKS_PREPROCESSORS: "CSS Frameworks and Preprocessors",
  JS_FRAMEWORKS_LIBRARIES: "JavaScript Frameworks and Libraries",
  DESIGN_PROTOTYPING: "Design and Prototyping",
  E_COMMERCE_PLATFORMS: "E-commerce Platforms",
  PROJECT_MANAGEMENT_COMMUNICATION: "Project Management and Communication",
  CONTENT_MANAGEMENT_SYSTEMS: "Content Management Systems (CMS)",
  CLOUD_SERVICES_APIS: "Cloud Services and APIs",
  PROGRAMMING_LANGUAGES: "Programming Languages",
  WEB_STANDARDS_ACCESSIBILITY: "Web Standards and Accessibility",
};

export type Technology = (typeof CVTechnologies)[keyof typeof CVTechnologies];

export interface Technologies {
  [key: string]: {
    name: string;
    category: string;
    technologies: {
      name: string;
      description: string;
    }[];
  };
}

export const technologies: Technologies = {
  [Technology.FRONTEND_DEVELOPMENT]: {
    name: "Frontend Development",
    category: "Development",
    technologies: [
      {
        name: "Vue",
        description:
          "Vue.js is an open-source progressive JavaScript framework used for building user interfaces and single-page applications. It focuses on declarative rendering and component composition.",
      },
      {
        name: "React",
        description:
          "React is a JavaScript library for building user interfaces. It enables developers to create large web applications that can change data, without reloading the page. Its key feature is the ability to build components.",
      },
      {
        name: "React Native",
        description:
          "React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web, and UWP by enabling developers to use React along with native platform capabilities.",
      },
      {
        name: "Vite",
        description:
          "Vite is a modern frontend build tool that significantly improves the frontend development experience. It leverages esbuild for super-fast JavaScript/TypeScript transformation and Rollup for bundling.",
      },
      {
        name: "Vuex",
        description:
          "Vuex is a state management pattern and library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.",
      },
      {
        name: "Vue Router",
        description:
          "Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. Features include nested routes/mapping, modular, component-based routers, and more.",
      },
      {
        name: "Next",
        description:
          "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications. It's a powerful tool for building scalable and performant web applications.",
      },
      {
        name: "Nuxt",
        description:
          "Nuxt.js is an intuitive Vue framework that simplifies the development of powerful Universal, Single Page, and Static Generated Applications. It offers a modular architecture for server-side rendering, code splitting, and more.",
      },
      {
        name: "Angular",
        description:
          "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. It provides developers with an efficient way to build and scale projects from single developers to enterprise level.",
      },
      {
        name: "Svelte",
        description:
          "Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.",
      },
      {
        name: "Ember",
        description:
          "Ember.js is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device.",
      },
    ],
  },

  [Technology.BACKEND_DEVELOPMENT]: {
    name: "Backend Development",
    category: "Development",
    technologies: [
      {
        name: "Node",
        description:
          "Node.js is a runtime environment that allows execution of JavaScript code server-side. It's built on Chrome's V8 JavaScript engine and enables the development of scalable network applications.",
      },
      {
        name: "Express",
        description:
          "Express.js is a web application framework for Node.js, designed for building web applications and APIs. It is known for its minimalistic structure and is considered the standard server framework for Node.js.",
      },
      {
        name: "Nest",
        description:
          "NestJS is a framework for building efficient, reliable and scalable server-side applications. Built with and fully supports TypeScript, it uses progressive JavaScript and is built with and for Node.js.",
      },
      {
        name: "Strapi",
        description:
          "Strapi is an open-source headless CMS built with Node.js. It provides developers with the tools to create, manage, and expose content for any digital device, without the need for a frontend/UI.",
      },
      {
        name: "GraphQL",
        description:
          "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. It provides a more efficient, powerful and flexible alternative to REST.",
      },
      {
        name: "Apollo",
        description:
          "Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client. It's easy to set up and is designed to make fetching data as simple as possible.",
      },
    ],
  },

  [Technology.DESIGN_TOOLS]: {
    name: "Design Tools",
    category: "Design",
    technologies: [
      {
        name: "Photoshop",
        description:
          "Adobe Photoshop is a powerful imaging and graphic design software used by designers, photographers, and artists around the world for their digital art creations. It offers extensive tools for photo editing, graphic design, and digital painting.",
      },
      {
        name: "Illustrator",
        description:
          "Adobe Illustrator is a comprehensive vector graphics software used by designers of all types who want to create digital graphics, illustrations, and typography for all kinds of media: print, web, interactive, video, and mobile.",
      },
      {
        name: "InDesign",
        description:
          "Adobe InDesign is a desktop publishing and typesetting software used to create works such as posters, flyers, brochures, magazines, newspapers, presentations, books, and ebooks. It supports export in ePub and PDF formats for digital publishing.",
      },
      {
        name: "XD",
        description:
          "Adobe XD is a vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc. It enables users to create user interfaces for apps and websites with tools for design, prototype, and share.",
      },
      {
        name: "Figma",
        description:
          "Figma is a cloud-based design tool that is similar to Sketch in functionality and features but with big differences that make Figma better for team collaboration. It allows for real-time collaboration on design projects.",
      },
      {
        name: "Sketch",
        description:
          "Sketch is a vector graphics editor for macOS, focused on digital design. It's widely used by web and mobile app designers, providing features like symbols and shared styles to facilitate the design process.",
      },
      {
        name: "Zeplin",
        description:
          "Zeplin is a collaboration tool for UI designers and frontend developers. It allows for designs to be converted into specs and guidelines, and assets to be exported, facilitating handoff between design and development.",
      },
      {
        name: "Invision",
        description:
          "InVision is a digital product design platform that provides tools for collaborative design, prototyping, and workflow. It's used to create interactive mockups for web and mobile projects.",
      },
      {
        name: "Principle",
        description:
          "Principle is a tool for designing interactive interfaces. Known for its simplicity, it allows designers to create complex animations and interactive prototypes for web, mobile, and desktop applications.",
      },
      {
        name: "Framer",
        description:
          "Framer is a tool for interactive design and prototyping. It combines the power of code with the ease of visual editing to help teams design every part of the product experience.",
      },
    ],
  },

  [Technology.VERSION_CONTROL]: {
    name: "Version Control and Collaboration",
    category: "Development Tools",
    technologies: [
      {
        name: "Git",
        description:
          "Git is a free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It's easy to learn and has a tiny footprint with lightning-fast performance.",
      },
      {
        name: "GitHub",
        description:
          "GitHub is a cloud-based hosting service that lets you manage Git repositories. It provides a web-based graphical interface and access control and several collaboration features, such as bug tracking, feature requests, task management, and wikis for every project.",
      },
      {
        name: "GitLab",
        description:
          "GitLab is a complete DevOps platform, delivered as a single application. It provides a Git-repository manager providing wiki, issue-tracking, and CI/CD pipeline features, using an open-source license, developed by GitLab Inc.",
      },
      {
        name: "Bitbucket",
        description:
          "Bitbucket is a Git-based source code repository hosting service owned by Atlassian. Bitbucket offers both commercial plans and free accounts with an unlimited number of private repositories. It integrates well with JIRA, a project management software for teams.",
      },
    ],
  },

  [Technology.DATABASES]: {
    name: "Databases",
    category: "Development",
    technologies: [
      {
        name: "MySQL",
        description:
          "MySQL is an open-source relational database management system (RDBMS) based on Structured Query Language (SQL). It is widely used for web databases, supporting a large number of applications.",
      },
      {
        name: "Postgres",
        description:
          "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It's designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users.",
      },
      {
        name: "MongoDB",
        description:
          "MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need. It stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.",
      },
      {
        name: "Firebase",
        description:
          "Firebase is a platform developed by Google for creating mobile and web applications. It provides a real-time database and backend as a service. The service provides application developers an API that allows application data to be synchronized across clients and stored on Firebase's cloud.",
      },
      {
        name: "NoSQL",
        description:
          "NoSQL databases are designed to break away from the rows and columns of the traditional database in favor of a more flexible, scalable model that is particularly suited for handling large volumes of unstructured data. They include document, wide-column, graph, and key-value databases.",
      },
    ],
  },
  DEVOPS_INFRASTRUCTURE: {
    name: "DevOps and Infrastructure",
    category: "DevOps",
    technologies: [
      {
        name: "Docker",
        description:
          "Docker is a set of platform-as-a-service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from each other and bundle their own software, libraries, and configuration files; they can communicate with each other through well-defined channels.",
      },
      {
        name: "Kubernetes",
        description:
          "Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications. It groups containers that make up an application into logical units for easy management and discovery.",
      },
      {
        name: "Vagrant",
        description:
          "Vagrant is an open-source software product for building and maintaining portable virtual software development environments. It enables users to create and configure lightweight, reproducible, and portable development environments.",
      },
      {
        name: "Virtualbox",
        description:
          "VirtualBox is a free and open-source hosted hypervisor for x86 virtualization, allowing users to run multiple guest operating systems on a single host. It is designed for server, desktop, and embedded use.",
      },
      {
        name: "Terraform",
        description:
          "Terraform is an open-source infrastructure as code software tool created by HashiCorp. It allows users to define and provision data center infrastructure using a declarative configuration language known as HashiCorp Configuration Language (HCL), or optionally JSON.",
      },
    ],
  },

  [Technology.TESTING_QA]: {
    name: "Testing and QA",
    category: "Quality Assurance",
    technologies: [
      {
        name: "Jest",
        description:
          "Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works out of the box for any React project and is widely used in the JavaScript community for unit and integration testing.",
      },
      {
        name: "Vitest",
        description:
          "Vitest is a Vite-native test framework that works out of the box with Vite's dev server and module resolution. It's optimized for speed and developer experience, offering a fast and reliable testing solution for modern web projects.",
      },
      {
        name: "Cypress",
        description:
          "Cypress is a next-generation front end testing tool built for the modern web. It addresses the key pain points developers and QA engineers face when testing modern applications, offering a more reliable and faster testing experience.",
      },
      {
        name: "Jasmine",
        description:
          "Jasmine is a behavior-driven development framework for testing JavaScript code. It does not rely on browsers, DOM, or any JavaScript framework, making it suited for websites, Node.js projects, or anywhere that JavaScript can run.",
      },
      {
        name: "Karma",
        description:
          "Karma is a test runner for JavaScript that runs on Node.js. It is designed to work with any testing framework, such as Jasmine, Mocha, or QUnit. It allows for testing on real devices such as phones and tablets, as well as on desktop browsers.",
      },
      {
        name: "Mocha",
        description:
          "Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.",
      },
      {
        name: "Chai",
        description:
          "Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework. It provides developers with a range of assertions and utilities to enhance the testing experience.",
      },
    ],
  },
  [Technology.CSS_FRAMEWORKS_PREPROCESSORS]: {
    name: "CSS Frameworks and Preprocessors",
    category: "Frontend Development",
    technologies: [
      {
        name: "Sass",
        description:
          "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It offers more robust styling capabilities with variables, nested rules, mixins, and more, helping developers write CSS in a more structured way.",
      },
      {
        name: "Tailwind",
        description:
          "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. It emphasizes utility classes to build components directly in the markup, reducing the need to write custom CSS.",
      },
      {
        name: "Styled Components",
        description:
          "Styled Components is a library for React and React Native developers. It allows you to use component-level styles in your application, using tagged template literals to style your components with plain JavaScript.",
      },
      {
        name: "Bootstrap",
        description:
          "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web. It includes a comprehensive collection of pre-designed components and plugins for quick and easy web development.",
      },
      {
        name: "Foundation",
        description:
          "Foundation is a responsive front-end framework that makes it easy to design beautiful responsive websites, apps, and emails that look amazing on any device. It offers a range of customizable templates and components.",
      },
      {
        name: "Material UI",
        description:
          "Material-UI is a set of React components that implement Google's Material Design. It provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster.",
      },
      {
        name: "Less",
        description:
          "Less is a backward-compatible language extension for CSS. It allows developers to use variables, mixins, functions, and many other techniques that allow you to make CSS that is more maintainable, themable, and extendable.",
      },
      {
        name: "PostCSS",
        description:
          "PostCSS is a tool for transforming CSS with JavaScript plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more, enabling you to automate routine CSS operations.",
      },
    ],
  },

  [Technology.JS_FRAMEWORKS_LIBRARIES]: {
    name: "JavaScript Frameworks and Libraries",
    category: "Frontend Development",
    technologies: [
      {
        name: "Redux",
        description:
          "Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. Primarily used with React, it can be used with any other JavaScript framework or library.",
      },
      {
        name: "Pinia",
        description:
          "Pinia is the officially recommended state management library for Vue 3. It offers a more intuitive and straightforward API than Vuex and is designed from the ground up to take advantage of Vue 3's Composition API.",
      },
      {
        name: "jQuery",
        description:
          "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler with an easy-to-use API that works across a multitude of browsers.",
      },
      {
        name: "Webpack",
        description:
          "Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles.",
      },
      {
        name: "Rollup",
        description:
          "Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It's optimized for ES6 modules, making it possible to bundle your project's static assets.",
      },
      {
        name: "Gulp",
        description:
          "Gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something. It's used for task automation, such as bundling and minifying libraries and stylesheets, compiling new files, and reloading the browser.",
      },
      {
        name: "Grunt",
        description:
          "Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. It uses a command-line interface to run custom tasks defined in a file.",
      },
      {
        name: "Babel",
        description:
          "Babel is a JavaScript compiler that allows you to use next generation JavaScript, today. It transforms ES6 code into backward-compatible versions of JavaScript that can be run by older JavaScript engines.",
      },
      {
        name: "ESLint",
        description:
          "ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code. It's fully pluggable, allowing developers to write their own rules and formats.",
      },
      {
        name: "Prettier",
        description:
          "Prettier is an opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.",
      },
      {
        name: "Storybook",
        description:
          "Storybook is an open-source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient.",
      },
    ],
  },

  [Technology.DESIGN_PROTOTYPING]: {
    name: "Design and Prototyping",
    category: "Design",
    technologies: [
      {
        name: "UI/UX",
        description:
          "UI/UX stands for User Interface and User Experience design, respectively. These disciplines focus on creating engaging interfaces with well-thought-out behaviors. UI design is about how products look, while UX involves how they work and fit into the user's life.",
      },
      {
        name: "Design",
        description:
          "Design in the context of digital products encompasses graphic design, interaction design, and user experience design. It's the process of envisioning and planning the creation of objects, systems, and services that aim to improve human experience.",
      },
      {
        name: "Responsive",
        description:
          "Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It's a critical aspect of modern web design, ensuring that applications are usable on any device.",
      },
      {
        name: "Cross Browser Compatibility",
        description:
          "Cross Browser Compatibility refers to the ability of a website, web application, HTML construct, or client-side script to function in environments that provide its required features and to bow out gracefully when features are absent or lacking.",
      },
    ],
  },
  [Technology.PROJECT_MANAGEMENT_COMMUNICATION]: {
    name: "Project Management and Communication",
    category: "Management Tools",
    technologies: [
      {
        name: "Slack",
        description:
          "Slack is a channel-based messaging platform that allows teams to collaborate and communicate more effectively. It integrates with a wide range of tools and services and supports both synchronous and asynchronous communication.",
      },
      {
        name: "Teams",
        description:
          "Microsoft Teams is a collaboration app that helps your team stay organized and have conversations all in one place. It integrates with Office 365 and other Microsoft services, providing a comprehensive solution for project management and communication.",
      },
      {
        name: "Jira",
        description:
          "Jira is a project management tool used for issue tracking, bug tracking, and agile project management. Developed by Atlassian, it's widely used by development teams to plan, track, and manage agile software development projects.",
      },
    ],
  },
  [Technology.E_COMMERCE_PLATFORMS]: {
    name: "E-commerce Platforms",
    category: "E-commerce",
    technologies: [
      {
        name: "Magento",
        description:
          "Magento, now Adobe Commerce, is an open-source e-commerce platform written in PHP. It provides online merchants with a flexible shopping cart system, as well as control over the look, content, and functionality of their online store.",
      },
      {
        name: "Shopify",
        description:
          "Shopify is a cloud-based, multi-channel commerce platform designed for small and medium-sized businesses. Merchants can use the software to design, set up, and manage their stores across multiple sales channels.",
      },
      {
        name: "Prestashop",
        description:
          "PrestaShop is a freemium, open-source e-commerce solution. The software is published under the Open Software License (OSL). It is used by thousands of business owners worldwide to run and manage their online stores.",
      },
      {
        name: "Woocommerce",
        description:
          "WooCommerce is a customizable, open-source eCommerce platform built on WordPress. It allows you to sell physical and digital goods, manage inventory and shipping, take secure payments, and sort taxes automatically.",
      },
      {
        name: "Opencart",
        description:
          "OpenCart is a free, open-source e-commerce platform for online merchants. It provides a professional and reliable foundation from which to build a successful online store. The system offers a wealth of features and is user-friendly, search engine friendly, and comes with a visually appealing interface.",
      },
      {
        name: "Big Commerce",
        description:
          "BigCommerce is a NASDAQ-listed e-commerce platform that provides a software-as-a-service (SaaS) product for business owners. It offers a variety of customizable templates to help design your online store, along with tools to manage inventory, process orders, and handle SEO.",
      },
    ],
  },
  [Technology.CONTENT_MANAGEMENT_SYSTEMS]: {
    name: "Content Management Systems (CMS)",
    category: "CMS",
    technologies: [
      {
        name: "Wordpress",
        description:
          "WordPress is a highly flexible content management system (CMS) that enables you to build and manage your own website using just your web browser. Best known for blogging, it supports a wide range of content types and is used for various websites, including e-commerce, media, and personal blogs.",
      },
      {
        name: "Drupal",
        description:
          "Drupal is an open-source CMS platform that provides a sophisticated API for developers. It's known for its powerful classification abilities and suitability for complex, content-heavy, and high-traffic websites. It also emphasizes security, performance, and customizable content structures.",
      },
      {
        name: "Contentful",
        description:
          "Contentful is a headless CMS that offers the flexibility of a content-as-a-service platform. It allows you to create, manage, and distribute content to any platform or device with its API-first approach, making it a popular choice for developers and marketers alike.",
      },
      {
        name: "Strapi",
        description:
          "Strapi is an open-source headless CMS built with Node.js. It gives developers the freedom to use their favorite tools and frameworks while allowing editors to easily manage and distribute their content. By decoupling the content and presentation layers, Strapi enables more flexible and scalable content management strategies.",
      },
    ],
  },
  [Technology.CLOUD_SERVICES_APIS]: {
    name: "Cloud Services and APIs",
    category: "Cloud Computing",
    technologies: [
      {
        name: "AWS",
        description:
          "Amazon Web Services (AWS) is a comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. It provides infrastructure as a service (IaaS), platform as a service (PaaS), and packaged software as a service (SaaS) offerings.",
      },
      {
        name: "Azure",
        description:
          "Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers. It supports various programming languages, tools, and frameworks, including both Microsoft-specific and third-party software and systems.",
      },
      {
        name: "Salesforce",
        description:
          "Salesforce is a cloud-based software company that provides customer relationship management (CRM) service and also sells a complementary suite of enterprise applications focused on customer service, marketing automation, analytics, and application development.",
      },
      {
        name: "Stripe",
        description:
          "Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use its software to accept payments and manage their businesses online.",
      },
      {
        name: "Adyen",
        description:
          "Adyen is a global payment company that allows businesses to accept e-commerce, mobile, and point-of-sale payments. Adyen offers merchants online services for accepting electronic payments by payment methods including credit cards, bank-based payments such as debit cards, bank transfer, and real-time bank transfers based on online banking.",
      },
      {
        name: "API",
        description:
          "API (Application Programming Interface) is a set of rules, protocols, and tools for building software and applications. It specifies how software components should interact and allows different software applications to communicate with each other.",
      },
    ],
  },
  [Technology.PROGRAMMING_LANGUAGES]: {
    name: "Programming Languages",
    category: "Programming",
    technologies: [
      {
        name: "PHP",
        description:
          "PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible, and pragmatic, PHP powers everything from your blog to the most popular websites in the world.",
      },
      {
        name: "Python",
        description:
          "Python is an interpreted, high-level, general-purpose programming language. Its design philosophy emphasizes code readability with its notable use of significant whitespace. Python's constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
      },
      {
        name: "Typescript",
        description:
          "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS.",
      },
      {
        name: "Javascript",
        description:
          "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement complex features on web pages—every time a web page does more than just sit there and display static information for you to look at, JavaScript is probably involved.",
      },
      {
        name: "HTML",
        description:
          "HTML (Hypertext Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
      },
      {
        name: "CSS",
        description:
          "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
      },
    ],
  },

  [Technology.WEB_STANDARDS_ACCESSIBILITY]: {
    name: "Web Standards and Accessibility",
    category: "Web Standards",
    technologies: [
      {
        name: "WCAG",
        description:
          "The Web Content Accessibility Guidelines (WCAG) are part of a series of web accessibility guidelines published by the W3C's Web Accessibility Initiative. They consist of a set of guidelines for making web content more accessible, primarily for people with disabilities—but also for all user interfaces, including mobile devices.",
      },
      {
        name: "i18n",
        description:
          "Internationalization (i18n) is the process of designing a software application so that it can be adapted to various languages and regions without engineering changes. It involves ensuring code can handle different languages, regions, and cultures.",
      },
      {
        name: "a11y",
        description:
          "Accessibility (a11y) is the practice of making your websites usable by as many people as possible. We traditionally think of this as being about people with disabilities, but the practice of making sites accessible also benefits other groups such as those using mobile devices, or those with slow network connections.",
      },
      {
        name: "BEM",
        description:
          "Block Element Modifier (BEM) is a methodology that helps you to create reusable components and code sharing in front-end development. It's a way of naming your CSS classes in a way that makes them more transparent and understandable to developers.",
      },
      {
        name: "OOCSS",
        description:
          "Object-Oriented CSS (OOCSS) is a concept for writing CSS that aims to encourage code reuse and, ultimately, faster and more efficient stylesheets that are easier to add to and maintain.",
      },
      {
        name: "SMACSS",
        description:
          "Scalable and Modular Architecture for CSS (SMACSS) is a style guide that follows five simple categories for CSS rules. It aims to create a consistent approach to writing efficient, scalable, and modular CSS that reduces the complexity of working with large stylesheets.",
      },
    ],
  },
};

export const CVTechnologies = {
  VUE: "Vue",
  REACT: "React",
  REACT_NATIVE: "React Native",
  SASS: "Sass",
  VITE: "Vite",
  VUEX: "Vuex",
  VUE_ROUTER: "Vue Router",
  PHOTOSHOP: "Adobe Photoshop",
  ILLUSTRATOR: "Adobe Illustrator",
  INDESIGN: "Adobe InDesign",
  XD: "Adobe XD",
  FIGMA: "Figma",
  SKETCH: "Sketch",
  ZEPLIN: "Zeplin",
  INVISION: "Invision",
  PRINCIPLE: "Principle",
  FRAMER: "Framer",
  SLACK: "Slack",
  TEAMS: "Microsoft Teams",
  JIRA: "Jira",
  GITHUB: "Github",
  GITLAB: "Gitlab",
  BITBUCKET: "Bitbucket",
  PHP: "PHP",
  MYSQL: "MySQL",
  POSTGRES: "Postgres",
  MONGODB: "MongoDB",
  GRAPHQL: "GraphQL",
  APOLLO: "Apollo",
  REDUX: "Redux",
  NEXT: "Next",
  NEST: "Nest",
  NUXT: "Nuxt",
  EXPRESS: "Express",
  STRAPI: "Strapi",
  CONTENTFUL: "Contentful",
  WORDPRESS: "Wordpress",
  DRUPAL: "Drupal",
  MAGENTO: "Magento",
  SHOPIFY: "Shopify",
  PRESTASHOP: "Prestashop",
  WOOCOMMERCE: "Woocommerce",
  OPENCART: "Opencart",
  SAP: "SAP",
  ORACLE: "Oracle",
  SALESFORCE: "Salesforce",
  AWS: "AWS",
  AZURE: "Azure",
  COMMERCETOOLS: "Commercetools",
  BIG_COMMERCE: "Big Commerce",
  CONTENTSTACK: "Contentstack",
  BLOOMREACH: "Bloomreach",
  AMPLIENCE: "Amplience",
  STRIPE: "Stripe",
  ADYEN: "Adyen",
  API: "API",
  NODE: "Node",
  TYPESCRIPT: "Typescript",
  JAVASCRIPT: "Javascript",
  HTML: "HTML",
  CSS: "CSS",
  TAILWIND: "Tailwind",
  STYLED_COMPONENTS: "Styled Components",
  WEBSOCKETS: "Websockets",
  ANGULAR: "Angular",
  JEST: "Jest",
  VITEST: "Vitest",
  CYPRESS: "Cypress",
  JASMINE: "Jasmine",
  KARMA: "Karma",
  MOCHA: "Mocha",
  CHAI: "Chai",
  JQUERY: "jQuery",
  BOOTSTRAP: "Bootstrap",
  FOUNDATION: "Foundation",
  MATERIAL_UI: "Material UI",
  WEBPACK: "Webpack",
  ROLLUP: "Rollup",
  GULP: "Gulp",
  GRUNT: "Grunt",
  BABEL: "Babel",
  ESLINT: "ESLint",
  PRETTIER: "Prettier",
  STORYBOOK: "Storybook",
  LESS: "Less",
  POSTCSS: "PostCSS",
  SVELTE: "Svelte",
  EMBER: "Ember",
  HANDLEBARS: "Handlebars",
  PUG: "Pug",
  EJS: "EJS",
  MARKDOWN: "Markdown",
  REST: "REST",
  GIT: "Git",
  NPM: "npm",
  YARN: "Yarn",
  DOCKER: "Docker",
  KUBERNETES: "Kubernetes",
  VAGRANT: "Vagrant",
  VIRTUALBOX: "Virtualbox",
  TERRAFORM: "Terraform",
  IONIC: "Ionic",
  CORDOVA: "Cordova",
  PHONEGAP: "Phonegap",
  ELECTRON: "Electron",
  REDUXSAGA: "Redux Saga",
  FIREBASE: "Firebase",
  NOSQL: "NoSQL",
  PINIA: "Pinia",
  PYTHON: "Python",
  UI_UX: "UI/UX",
  DESIGN: "Design",
  DEVOPS: "DevOps",
  RESPONSIVE: "Responsive",
  CROSS_BROWSER: "Cross Browser Compatibility",
  WCAG: "WCAG",
  I18N: "i18n",
  A11Y: "a11y",
  BEM: "BEM",
  OOCSS: "OOCSS",
  SMACSS: "SMACSS",
};

export type CVTechnologies =
  (typeof CVTechnologies)[keyof typeof CVTechnologies];

export interface CVItem {
  title: string;
  company: string;
  location: string[];
  link: string;
  date: [Date, Date];
  description: string;
  about?: string;
  end?: string;
  tasks?: [];
  technologies?: CVTechnologies[];
}
