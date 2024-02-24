import { CVTechnologies, CVItem } from "./types"

export const cv: CVItem[] = [{
        title: "Freelance Creative Developer",
        company: "Freelance",
        location: ["Malta", "Remote"],
        link: "https://sil.mt",
        date: [new Date('November 2023'), new Date()],
        description: "Currently engaging in freelance creative development, I offer my services for hire. This period also includes dedicating time to personal projects.",
        about: "As a Freelance Creative Developer, I leverage a wide array of technologies to deliver innovative solutions across various projects, embodying the flexibility and dynamism of freelance work.",
        technologies: [CVTechnologies.VUE, CVTechnologies.GITHUB, CVTechnologies.WORDPRESS, CVTechnologies.TYPESCRIPT, CVTechnologies.SASS, CVTechnologies.NODE, CVTechnologies.SLACK],
    }, {
        title: "Senior Frontend Developer",
        company: "Yieldstreet",
        location: ["Malta", "Remote"],
        link: "https://www.yieldstreet.com",
        date: [new Date('January 2022'), new Date('November 2022')],
        description: "Oversaw frontend development for Yieldstreet, collaborating with a team to craft a platform enabling users to engage in alternative investments.",
        about: "Yieldstreet provides an innovative investment platform designed to offer unique opportunities in alternative investments, making financial progress accessible to all.",
        end: "Departed due to unmet promises regarding role evolution, with a focus remaining on maintenance over visual development.",
        technologies: [CVTechnologies.REACT, CVTechnologies.REACT_NATIVE, CVTechnologies.GITHUB, CVTechnologies.TYPESCRIPT, CVTechnologies.STYLED_COMPONENTS, CVTechnologies.WEBSOCKETS, CVTechnologies.GRAPHQL, CVTechnologies.SLACK]
    }, {
        title: "Senior Technical Consultant",
        company: "Vue Storefront",
        location: ["Remote"],
        link: "https://www.vuestorefront.io",
        date: [new Date('January 2022'), new Date('December 2022')],
        description: "Led technical consulting for Vue Storefront, aiding in the development of a robust headless ecommerce platform.",
        about: "Vue Storefront is a pioneering headless ecommerce platform, enabling businesses to create seamless shopping experiences across various devices.",
        end: "Exited due to a mismatch in role expectations and actual duties, primarily involving client platform upgrades.",
        technologies: [CVTechnologies.VUE, CVTechnologies.VUEX, CVTechnologies.VUE_ROUTER, CVTechnologies.GITHUB, CVTechnologies.TYPESCRIPT, CVTechnologies.SASS, CVTechnologies.NODE, CVTechnologies.API, CVTechnologies.MAGENTO, CVTechnologies.AMPLIENCE, CVTechnologies.ADYEN, CVTechnologies.APOLLO, CVTechnologies.BIG_COMMERCE, CVTechnologies.BITBUCKET, CVTechnologies.BLOOMREACH, CVTechnologies.COMMERCETOOLS, CVTechnologies.CONTENTFUL, CVTechnologies.CONTENTSTACK, CVTechnologies.JIRA, CVTechnologies.SLACK, CVTechnologies.TYPESCRIPT, CVTechnologies.JAVASCRIPT]
        
    
    }, {
        title: "Senior Frontend Developer",
        company: "Gaming Innovation Group",
        location: ["Malta", "Remote"],
        link: "https://gig.com",
        date: [new Date('September 2020'), new Date('December 2021')],
        description: "Contributed to the frontend development of the GiG Sportsbook, working alongside a team to offer online gambling platforms.",
        about: "Gaming Innovation Group is at the forefront of providing solutions for the gambling industry, focusing on creating superior online gaming experiences.",
        end: "Left following the company’s acquisition, which shifted priorities away from the Sportsbook project.",
        technologies: [CVTechnologies.VUE, CVTechnologies.REACT, CVTechnologies.API, CVTechnologies.BITBUCKET, CVTechnologies.JIRA, CVTechnologies.GRAPHQL, CVTechnologies.HTML, CVTechnologies.CSS, CVTechnologies.SASS, CVTechnologies.TYPESCRIPT, CVTechnologies.JAVASCRIPT, CVTechnologies.WEBSOCKETS]
    }, {
        title: "Senior Frontend Consultant",
        company: "Divotion",
        link: "https://www.divotion.com",
        location: ["Nieuwegein, the Netherlands", "Amsterdam, the Netherlands"],
        date: [new Date('October 2019'), new Date('September 2020')],
        description: "Engaged in both internal and client-based projects as a consultant at Divotion, focusing on frontend solutions.",
        about: "Divotion stands out as a consultancy specializing in frontend technologies, offering expertise to drive innovation and enhance digital experiences.",
        end: "Departed due to relocation aspirations, with the company unable to accommodate remote work at the time.",
        technologies: [CVTechnologies.VUE, CVTechnologies.REACT, CVTechnologies.ANGULAR, CVTechnologies.GITHUB, CVTechnologies.TYPESCRIPT, CVTechnologies.SASS, CVTechnologies.NODE, CVTechnologies.JIRA, CVTechnologies.SLACK, CVTechnologies.TAILWIND]
    }, {
        title: "Senior Frontend Consultant",
        company: "Yolt",
        link: "https://www.yolt.com",
        location: ["Amsterdam, the Netherlands"],
        date: [new Date('March 2019'), new Date('September 2020')],
        description: "Specialized in frontend development at Yolt, initiating a design system and addressing bugs within an AngularJS application.",
        about: "Yolt is a revolutionary financial app that simplifies personal finance management through smart insights and seamless account integration.",
        end: "Left due to a desire to explore new opportunities and relocate to Malta.",
        technologies: [CVTechnologies.ANGULAR,CVTechnologies.REACT, CVTechnologies.GITHUB, CVTechnologies.TYPESCRIPT, CVTechnologies.SASS, CVTechnologies.NODE, CVTechnologies.JIRA, CVTechnologies.SLACK]
    }, {
        title: "Senior Frontend Consultant",
        company: "Transavia",
        link: "https://www.transavia.com",
        location: ["Amsterdam, the Netherlands"],
        date: [new Date('November 2019'), new Date('February 2020')],
        description: "Contributed to Transavia by spearheading the development of a new design system, laying the groundwork for its digital platforms.",
        about: "Transavia, a Dutch airline, focuses on affordable and accessible air travel, offering passengers a friendly and efficient service.",
        end: "Contract ended due to budget cuts prompted by the Covid-19 pandemic."
    }, {
        title: "Senior Frontend Developer",
        company: "Matise",
        link: "https://www.matise.nl",
        location: ["Amsterdam, the Netherlands"],
        date: [new Date('November 2013'), new Date('September 2019')],
        description: "Played a key role at Matise, driving frontend development across a variety of client projects, leading to the creation of visually impactful websites.",
        about: "Matise is recognized as a creative digital agency, crafting unique web experiences through innovative design and technology.",
        end: "Pursued relocation to Malta for personal growth and new opportunities."
    }, {
        title: "Freelance Web Developer and Designer",
        company: "Freelance",
        link: '',
        location: ["Willemstad, Curaçao", "Panama City, Panama", "Amsterdam, the Netherlands / Malta"],
        date: [new Date('May 2010'), new Date('January 2015')],
        description: "Offered comprehensive web development and design services on a freelance basis, collaborating closely with clients on web presence, branding, and graphic design.",
        about: "As a Freelance Web Developer and Designer, I provided bespoke digital solutions, from website development to graphic design, aiding clients in crafting their brand identity.",
        technologies: [CVTechnologies.PHP, CVTechnologies.VUE, CVTechnologies.PHOTOSHOP, CVTechnologies.ILLUSTRATOR, CVTechnologies.INDESIGN, CVTechnologies.WORDPRESS]
    }, {
        title: "Creative Retoucher",
        company: "Souverein",
        link: "",
        location: ["Weesp, the Netherlands"],
        date: [new Date('January 2007'), new Date('April 2010')],
        description: "Focused on image retouching and photography for Souverein’s clients, ensuring high-quality visual content.",
        about: "Souverein stands as a creative studio specializing in high-end image creation and retouching, serving a diverse clientele across various industries.",
        technologies : [CVTechnologies.PHOTOSHOP]
    }, {
        title: "Organizer",
        company: "Compact Events",
        link: "",
        location: ["Amsterdam, the Netherlands"],
        date: [new Date('January 2006'), new Date('April 2010')],
        description: "Managed event organization and design creation at Compact Events, delivering memorable experiences.",
        about: "Compact Events is known for organizing distinctive events that cater to a wide range of audiences, ensuring each event is a unique experience."
    }, {
        title: "Pixel Artist and Web Developer",
        company: "The Saints",
        link: "",
        location: ["Amsterdam, the Netherlands"],
        date: [new Date('January 2006'), new Date('December 2006')],
        description: "Led website design and pixel art creation for games, contributing to The Saints' digital and gaming projects.",
        about: "The Saints is a creative agency focused on digital design and game development, blending artistic talent with technical expertise."
    }, {
        title: "Web Developer and Designer",
        company: "Synetic",
        link: "https://www.synetic.nl",
        location: ["Amsterdam, the Netherlands"],
        date: [new Date('September 2005'), new Date('December 2006')],
        description: "Oversaw website design and development, playing a crucial role in shaping Synetic's digital offerings.",
        about: "Synetic is a digital agency committed to delivering cutting-edge web solutions, enhancing user experience through innovative design and technology."
    }];
    