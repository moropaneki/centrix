export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  headline: string;
  description: string;

  intro: {
    title: string;
    paragraphs: string[];
  };

  problems: {
    title: string;
    description: string;
  }[];

  deliverables: {
    title: string;
    description: string;
  }[];

  process: {
    number: string;
    title: string;
    description: string;
  }[];

  idealFor: string[];

  technologies: string[];

  closing: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  // ======================================================
  // BUSINESS WEBSITES
  // ======================================================

  {
    slug: "websites",

    eyebrow: "Business Websites",

    title: "Professional Website Design & Development",

    headline:
      "Websites designed to make your business look credible, professional, and ready to grow.",

    description:
      "We design and develop modern business websites that clearly communicate what you do, build trust with potential customers, and turn visitors into real enquiries.",

    intro: {
      title: "Your website should do more than just exist.",

      paragraphs: [
        "For many potential customers, your website is the first interaction they will have with your business. A slow, outdated, confusing, or poorly designed website can create the wrong impression before you ever have the opportunity to speak to them.",

        "We build professional websites that combine strong visual design, clear messaging, responsive layouts, and modern technology to create an online presence your business can confidently send customers to.",

        "Whether you are launching a new company, replacing an outdated website, or creating a stronger digital presence for an established business, we build around your objectives rather than forcing your business into a generic template.",
      ],
    },

    problems: [
      {
        title: "Your website looks outdated",
        description:
          "We modernise the visual experience so your online presence reflects the quality and professionalism of your business.",
      },

      {
        title: "Visitors don't understand what you offer",
        description:
          "We structure your pages and messaging so customers can quickly understand your services and know what to do next.",
      },

      {
        title: "The website doesn't generate enquiries",
        description:
          "We introduce clearer calls to action, enquiry forms, WhatsApp links, and conversion-focused page structures.",
      },

      {
        title: "The website performs poorly on mobile",
        description:
          "Every website we build is responsive and designed to work properly across phones, tablets, laptops, and desktops.",
      },
    ],

    deliverables: [
      {
        title: "Custom Website Design",
        description:
          "A modern visual direction tailored to your company, industry, brand, and target audience.",
      },

      {
        title: "Responsive Development",
        description:
          "Layouts designed to work smoothly across desktop, tablet, and mobile devices.",
      },

      {
        title: "Service Pages",
        description:
          "Dedicated pages that explain your individual services clearly and professionally.",
      },

      {
        title: "Lead Generation Forms",
        description:
          "Contact forms, quote requests, consultation forms, and other enquiry experiences.",
      },

      {
        title: "WhatsApp Integration",
        description:
          "Allow website visitors to start conversations with your business directly through WhatsApp.",
      },

      {
        title: "SEO-Friendly Structure",
        description:
          "Clean page structure, metadata, semantic HTML, and foundations that support search visibility.",
      },

      {
        title: "Performance Optimisation",
        description:
          "Optimised assets and modern development practices designed to keep your website fast.",
      },

      {
        title: "Analytics Integration",
        description:
          "Connect analytics tools so you can understand how visitors interact with your website.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Discovery",
        description:
          "We understand your company, target audience, services, competitors, and website objectives.",
      },

      {
        number: "02",
        title: "Structure",
        description:
          "We determine the pages, navigation, content hierarchy, and calls to action.",
      },

      {
        number: "03",
        title: "Design",
        description:
          "We create a professional visual direction aligned with your brand.",
      },

      {
        number: "04",
        title: "Development",
        description:
          "The approved experience is transformed into a fast and responsive website.",
      },

      {
        number: "05",
        title: "Testing",
        description:
          "We test layouts, forms, links, responsiveness, and important user journeys.",
      },

      {
        number: "06",
        title: "Launch",
        description:
          "The website is deployed, configured, and prepared for your customers.",
      },
    ],

    idealFor: [
      "Professional service companies",
      "Consultants",
      "Construction companies",
      "Law firms",
      "Property businesses",
      "Startups",
      "Restaurants",
      "Churches and organisations",
      "Finance companies",
      "Local businesses",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "WordPress",
      "Tailwind CSS",
      "Vercel",
      "WooCommerce",
    ],

    closing: {
      title: "Ready for a website that represents your business properly?",
      description:
        "Tell us about your business and we'll help you determine the right website structure, features, and technology.",
    },
  },

  // ======================================================
  // WEB APPLICATIONS
  // ======================================================

  {
    slug: "web-applications",

    eyebrow: "Web Applications",

    title: "Custom Web Application Development",

    headline:
      "Custom software built around the way your business actually works.",

    description:
      "We design and develop secure web applications, dashboards, customer portals, internal systems, and SaaS platforms tailored to real business processes.",

    intro: {
      title: "Sometimes a normal website isn't enough.",

      paragraphs: [
        "Businesses often reach a point where spreadsheets, disconnected systems, manual processes, and generic software begin slowing down operations.",

        "A custom web application gives you the ability to create workflows specifically around your organisation instead of constantly adapting your organisation to existing software.",

        "We build modern platforms that can handle users, permissions, workflows, reporting, customer data, integrations, payments, inventory, documents, notifications, and other business requirements.",
      ],
    },

    problems: [
      {
        title: "Too much manual administration",
        description:
          "We convert repetitive processes into structured digital workflows.",
      },

      {
        title: "Business information is scattered",
        description:
          "Create one platform where users can access the information and functionality they need.",
      },

      {
        title: "Existing software doesn't fit",
        description:
          "Custom development allows your system to follow your actual business rules.",
      },

      {
        title: "Customers need self-service",
        description:
          "We can create customer portals where users can securely access information and perform actions online.",
      },
    ],

    deliverables: [
      {
        title: "Admin Dashboards",
        description:
          "Centralised dashboards for managing users, operations, records, and business information.",
      },

      {
        title: "Customer Portals",
        description:
          "Secure areas where customers can log in, access information, upload documents, or manage services.",
      },

      {
        title: "Authentication & Permissions",
        description:
          "Secure login systems with role-based access and user permissions.",
      },

      {
        title: "Database Design",
        description:
          "Structured databases designed around your application's data requirements.",
      },

      {
        title: "API Development",
        description:
          "Secure APIs that connect your frontend, mobile applications, and external services.",
      },

      {
        title: "Reports & Dashboards",
        description:
          "Create useful operational dashboards and reporting views from your business data.",
      },

      {
        title: "Notifications",
        description:
          "Email, application, webhook, and other notification workflows.",
      },

      {
        title: "Third-Party Integrations",
        description:
          "Connect your application with CRM, finance, payments, messaging, and other platforms.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Requirements",
        description:
          "We document users, workflows, business rules, integrations, and expected outcomes.",
      },

      {
        number: "02",
        title: "Architecture",
        description:
          "We design the application structure, database, APIs, permissions, and technical approach.",
      },

      {
        number: "03",
        title: "Product Design",
        description:
          "We plan how users will navigate and interact with the application.",
      },

      {
        number: "04",
        title: "Development",
        description:
          "Frontend, backend, database, and integrations are implemented.",
      },

      {
        number: "05",
        title: "Testing",
        description:
          "Critical workflows, permissions, integrations, and edge cases are validated.",
      },

      {
        number: "06",
        title: "Release",
        description:
          "We deploy the application and continue improving it based on real usage.",
      },
    ],

    idealFor: [
      "Growing businesses",
      "Startups",
      "Operations teams",
      "Logistics companies",
      "Property businesses",
      "Finance organisations",
      "Service businesses",
      "Companies replacing spreadsheets",
      "Businesses requiring customer portals",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "Vercel",
    ],

    closing: {
      title: "Have a business process that needs a better system?",
      description:
        "Show us how the process currently works and we'll help you determine how it can be transformed into a custom digital platform.",
    },
  },

  // ======================================================
  // MOBILE APPLICATIONS
  // ======================================================

  {
    slug: "mobile-applications",

    eyebrow: "Mobile Applications",

    title: "Mobile Application Development",

    headline:
      "Mobile experiences designed around your customers, employees, and business.",

    description:
      "We design and build mobile applications that give users convenient access to your services, systems, and digital products wherever they are.",

    intro: {
      title: "Put your business directly into your users' hands.",

      paragraphs: [
        "Mobile applications can create faster, more convenient experiences for customers while also giving businesses new ways to deliver services and manage operations.",

        "We help businesses and entrepreneurs move from an initial app idea to a clearly defined product with the right features, user experience, backend systems, and integrations.",

        "Our focus is not simply building screens. We build complete digital products where the mobile experience connects reliably with your backend services and business processes.",
      ],
    },

    problems: [
      {
        title: "Customers need easier access",
        description:
          "Give customers a dedicated mobile experience instead of requiring them to navigate complex websites.",
      },

      {
        title: "Employees work away from desks",
        description:
          "Mobile tools can help field teams capture information and perform important tasks remotely.",
      },

      {
        title: "You have an app idea",
        description:
          "We help transform the idea into a realistic product scope and development roadmap.",
      },

      {
        title: "Your mobile experience is poor",
        description:
          "We design application experiences specifically around smaller screens and touch interactions.",
      },
    ],

    deliverables: [
      {
        title: "Application Planning",
        description:
          "Define the core problem, audience, features, and first release.",
      },

      {
        title: "User Experience",
        description:
          "Simple navigation and mobile-first workflows.",
      },

      {
        title: "Authentication",
        description:
          "Secure account registration, login, and session management.",
      },

      {
        title: "Backend Integration",
        description:
          "Connect the app securely with databases and backend services.",
      },

      {
        title: "API Integration",
        description:
          "Connect external systems, payments, CRM platforms, or existing business APIs.",
      },

      {
        title: "Push Notifications",
        description:
          "Keep users informed about important events and actions.",
      },

      {
        title: "Testing",
        description:
          "Validate application workflows across supported devices.",
      },

      {
        title: "Release Support",
        description:
          "Prepare the application for deployment and future improvements.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Product Discovery",
        description:
          "We define what the application should accomplish and who it serves.",
      },
      {
        number: "02",
        title: "Feature Planning",
        description:
          "We prioritise the features required for the first release.",
      },
      {
        number: "03",
        title: "UX & UI",
        description:
          "Application screens and user journeys are designed.",
      },
      {
        number: "04",
        title: "Development",
        description:
          "The application and required backend functionality are built.",
      },
      {
        number: "05",
        title: "Testing",
        description:
          "Features, integrations, and important journeys are tested.",
      },
      {
        number: "06",
        title: "Launch & Iterate",
        description:
          "The application is released and improved as the product evolves.",
      },
    ],

    idealFor: [
      "Startups",
      "Customer service platforms",
      "Field service teams",
      "Booking businesses",
      "Delivery businesses",
      "Membership platforms",
      "Internal operations teams",
      "New digital products",
    ],

    technologies: [
      "React",
      "TypeScript",
      "React Native",
      "Next.js",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "REST APIs",
    ],

    closing: {
      title: "Have an application idea?",
      description:
        "Tell us what you want your users to be able to do and we'll help turn the idea into a practical product.",
    },
  },

  // ======================================================
  // ECOMMERCE
  // ======================================================

  {
    slug: "ecommerce",

    eyebrow: "E-Commerce",

    title: "E-Commerce Website Development",

    headline:
      "Online stores designed to make selling easier for you and buying easier for your customers.",

    description:
      "We build professional e-commerce experiences with product management, payments, ordering, inventory integrations, and the tools needed to operate your online business.",

    intro: {
      title: "Your online store is part of your sales operation.",

      paragraphs: [
        "Successful e-commerce requires more than displaying products on a website. Product information, stock, payments, orders, customer communication, fulfilment, and reporting all need to work together.",

        "We create online stores that provide customers with a clear buying experience while considering how orders will actually be processed behind the scenes.",

        "Where required, we can also connect your store to external inventory, CRM, accounting, payment, or operational systems.",
      ],
    },

    problems: [
      {
        title: "You want to start selling online",
        description:
          "We create the store structure, catalogue, checkout, and payment experience required to launch.",
      },
      {
        title: "Stock is difficult to manage",
        description:
          "Inventory integrations can reduce duplicated data entry and improve visibility.",
      },
      {
        title: "Your checkout experience is poor",
        description:
          "We simplify the customer journey from product discovery to purchase.",
      },
      {
        title: "Systems are disconnected",
        description:
          "We can integrate your store with business systems using APIs and webhooks.",
      },
    ],

    deliverables: [
      {
        title: "Online Store Development",
        description:
          "Professional storefronts designed around your product catalogue.",
      },
      {
        title: "Product Catalogue",
        description:
          "Structured categories, products, variations, images, and product information.",
      },
      {
        title: "Payment Integration",
        description:
          "Connect supported online payment providers.",
      },
      {
        title: "Order Management",
        description:
          "Clear workflows for processing and tracking customer orders.",
      },
      {
        title: "Inventory Integration",
        description:
          "Synchronise product and stock information with supported external systems.",
      },
      {
        title: "CRM Integration",
        description:
          "Send relevant customer and order information into your CRM.",
      },
      {
        title: "Shipping Configuration",
        description:
          "Configure delivery rules appropriate to your operation.",
      },
      {
        title: "Analytics",
        description:
          "Track important behaviour and online sales activity.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Commerce Discovery",
        description:
          "We understand your products, customers, payments, fulfilment, and operational requirements.",
      },
      {
        number: "02",
        title: "Store Planning",
        description:
          "We define catalogue structure, navigation, checkout, and integrations.",
      },
      {
        number: "03",
        title: "Design",
        description:
          "We create a clear shopping experience aligned with your brand.",
      },
      {
        number: "04",
        title: "Development",
        description:
          "The store, payments, catalogue, and integrations are configured.",
      },
      {
        number: "05",
        title: "Testing",
        description:
          "Orders, payments, mobile layouts, and critical workflows are tested.",
      },
      {
        number: "06",
        title: "Launch",
        description:
          "Your store goes live with the required production configuration.",
      },
    ],

    idealFor: [
      "Retail companies",
      "Product brands",
      "Wholesalers",
      "Manufacturers",
      "Equipment suppliers",
      "Startups",
      "Existing physical stores",
      "Businesses expanding online",
    ],

    technologies: [
      "WooCommerce",
      "WordPress",
      "Next.js",
      "React",
      "REST APIs",
      "Inventory Platforms",
      "Payment Gateways",
    ],

    closing: {
      title: "Ready to start selling online?",
      description:
        "We'll help you create an online store that works for both your customers and your internal operation.",
    },
  },

  // ======================================================
  // AUTOMATION
  // ======================================================

  {
    slug: "automation-integrations",

    eyebrow: "Automation & Integrations",

    title: "Business Automation & System Integrations",

    headline:
      "Connect your systems, automate repetitive work, and let information move without manual intervention.",

    description:
      "We build integrations and automated workflows that connect business applications, APIs, CRM platforms, websites, databases, and external services.",

    intro: {
      title: "Your team shouldn't spend the day moving information between systems.",

      paragraphs: [
        "Many businesses use several systems that perform different parts of their operation. Problems appear when those applications do not communicate with one another.",

        "Employees end up copying customer information, updating spreadsheets, re-entering orders, creating documents manually, or performing repetitive administrative tasks.",

        "We use APIs, webhooks, automation platforms, and custom development to connect those systems and reduce unnecessary manual work.",
      ],
    },

    problems: [
      {
        title: "Duplicate data entry",
        description:
          "Automatically pass information between supported systems instead of entering it repeatedly.",
      },
      {
        title: "Disconnected platforms",
        description:
          "Integrate applications so important events and data can move between them.",
      },
      {
        title: "Manual processes",
        description:
          "Automate predictable workflows that consume employee time.",
      },
      {
        title: "Complex operational workflows",
        description:
          "Build custom automation where standard automation tools are not sufficient.",
      },
    ],

    deliverables: [
      {
        title: "CRM Integrations",
        description:
          "Connect websites, applications, finance systems, and other platforms to CRM.",
      },
      {
        title: "API Integrations",
        description:
          "Build integrations using REST APIs and supported third-party services.",
      },
      {
        title: "Webhooks",
        description:
          "Trigger workflows instantly when important events occur.",
      },
      {
        title: "CRM Automation",
        description:
          "Automate processes across supported business applications.",
      },
      {
        title: "Data Synchronisation",
        description:
          "Keep relevant information aligned between supported systems.",
      },
      {
        title: "Document Automation",
        description:
          "Generate documents or trigger document workflows from business data.",
      },
      {
        title: "Notifications",
        description:
          "Automate operational notifications and alerts.",
      },
      {
        title: "Custom Middleware",
        description:
          "Build intermediary services when direct integration is not sufficient.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Process Review",
        description:
          "We map the existing workflow and systems involved.",
      },
      {
        number: "02",
        title: "Integration Design",
        description:
          "We determine what information must move and when.",
      },
      {
        number: "03",
        title: "Development",
        description:
          "APIs, webhooks, functions, and automation workflows are implemented.",
      },
      {
        number: "04",
        title: "Testing",
        description:
          "We verify successful and unsuccessful scenarios.",
      },
      {
        number: "05",
        title: "Deployment",
        description:
          "The automation is introduced into the live environment.",
      },
      {
        number: "06",
        title: "Monitoring",
        description:
          "The workflow can be reviewed and improved as business requirements change.",
      },
    ],

    idealFor: [
      "CRM users",
      "Operations teams",
      "Finance teams",
      "Sales teams",
      "E-commerce businesses",
      "Companies using multiple software platforms",
      "Businesses with repetitive workflows",
    ],

    technologies: [
      "CRM Platforms",
      "REST APIs",
      "Webhooks",
      "Node.js",
      "NestJS",
      "Python",
      "Deluge",
      "WooCommerce",
    ],

    closing: {
      title: "Still copying information between systems?",
      description:
        "Show us your current workflow and we'll identify where integration and automation can remove unnecessary manual work.",
    },
  },

  // ======================================================
  // SUPPORT
  // ======================================================

  {
    slug: "support-maintenance",

    eyebrow: "Support & Maintenance",

    title: "Website & Application Support",

    headline:
      "Keep your website and software secure, reliable, and continuously improving.",

    description:
      "We provide ongoing technical support, maintenance, feature development, performance improvements, and troubleshooting for websites and applications.",

    intro: {
      title: "Launching is only the beginning.",

      paragraphs: [
        "Digital products change over time. Businesses introduce new services, customers request new functionality, integrations evolve, and software dependencies require maintenance.",

        "We help businesses keep their websites and applications reliable while continuing to improve them after launch.",

        "Support can range from occasional development requests to ongoing maintenance and feature development depending on your requirements.",
      ],
    },

    problems: [
      {
        title: "Your website has technical issues",
        description:
          "We investigate and resolve problems affecting important functionality.",
      },
      {
        title: "You need new features",
        description:
          "Existing products can be extended instead of rebuilt unnecessarily.",
      },
      {
        title: "Performance has declined",
        description:
          "We investigate application and website performance issues.",
      },
      {
        title: "Your business has changed",
        description:
          "We update your digital product as your services and processes evolve.",
      },
    ],

    deliverables: [
      {
        title: "Bug Fixes",
        description:
          "Investigate and resolve technical defects.",
      },
      {
        title: "Feature Development",
        description:
          "Add new functionality to existing applications.",
      },
      {
        title: "Website Updates",
        description:
          "Update content, pages, functionality, and integrations.",
      },
      {
        title: "Performance Improvements",
        description:
          "Improve areas affecting application or website performance.",
      },
      {
        title: "Integration Support",
        description:
          "Maintain and troubleshoot connected systems.",
      },
      {
        title: "Technical Improvements",
        description:
          "Modernise parts of existing applications where appropriate.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Assessment",
        description:
          "We review your existing website, application, or issue.",
      },
      {
        number: "02",
        title: "Prioritisation",
        description:
          "Tasks are classified based on importance and business impact.",
      },
      {
        number: "03",
        title: "Implementation",
        description:
          "Approved improvements or fixes are completed.",
      },
      {
        number: "04",
        title: "Testing",
        description:
          "Changes are validated before release.",
      },
      {
        number: "05",
        title: "Deployment",
        description:
          "Approved changes are released.",
      },
      {
        number: "06",
        title: "Continuous Improvement",
        description:
          "Future requirements can be planned as the product evolves.",
      },
    ],

    idealFor: [
      "Existing websites",
      "Existing web applications",
      "WordPress websites",
      "CRM integrations",
      "E-commerce stores",
      "Growing digital platforms",
      "Companies without an internal developer",
    ],

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "NestJS",
      "WordPress",
      "WooCommerce",
      "CRM Platforms",
      "PostgreSQL",
    ],

    closing: {
      title: "Need help with an existing website or application?",
      description:
        "Tell us what is currently not working or what you want to improve and we'll help determine the best next step.",
    },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
