import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    pricewise,
    react,
    snapgram,
    tailwindcss,
    threads,
    lambda,
    s3,
    chash,
    c,
    haskell,
    java,
    python,
    sql,
    unity,
    unreal,
    graph,
    weather,
    invoice,
    game,
    paint
} from "../icons";

import video from "../ITTAKESFIVE.mp4";
import video2 from "../PAINT.mp4";
import img from "../dashtracker.png";
import img2 from "../weather.png"
export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },  
    {
        imageUrl: chash,
        name: "C#",
        type: "Language",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Language",
    },
    {
        imageUrl: haskell,
        name: "Haskell",
        type: "Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Language",
    },
    {
        imageUrl: graph,
        name: "GraphQL",
        type: "Language",
    },
];

export const libraries = [
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mui,
        name: "MUI",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },  
    {
        imageUrl: tailwindcss,
        name: "Tailwind",
        type: "Frontend",
    },
    {
        imageUrl: lambda,
        name: "Lambda",
        type: "Frontend",
    },
];

export const tools = [
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: s3,
        name: "S3 Bucket",
        type: "Frontend",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Language",
    },
    {
        imageUrl: unreal,
        name: "Unreal",
        type: "Language",
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
        target: '',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/den09879',
        target: '_blank',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/dylan-ngo-99b3a020a/',
        target: '_blank',
    }
];



export const projects = [
    {
        iconUrl: invoice,
        theme: 'btn-back-red',
        name: 'E-Invoicing Application',
        description: "An E-Invoicing application built with Python 3.0 that verifies and renders unreadable invoices into human-readable formats. Stored invoices can be viewed through a React UI which extracts useful information. Working on this project taught me more about the elements of an agile software methodology. It was also one of the first applications I built that consisted of developing an front-end interface and integrating it with a back-end API.",
        link: 'https://github.com/den09879/uniprojects/tree/main/InvoiceProject',
        video: img,
    },
    {
        iconUrl: weather,
        theme: 'btn-back-green',
        name: 'Weather Application',
        description: 'A serverless GraphQL API deployed using Amazon Lambda. Application built with a React UI which showcased key weather information and wind energy efficiency. Locations and data were extracted from Bureau of Meteorology. I learnt more about cloud services and deploying an API via a serverless deployment. Working on this project also gave me more insight on how code should be developed for a company standard as we were encouraged to have our applications compatible with services built by other groups.',
        link: 'https://github.com/den09879/uniprojects/tree/main/WeatherProject',
        video: img2,
    },
    {
        iconUrl: game,
        theme: 'btn-back-blue',
        name: '3D Platformer - It Takes Five',
        description: 'Developed a 3D platformer using Unreal Engine 5, includes gaming mechanics such as  collision detection and physics-based interactions alongisde features such as a grappling hook, platform gun and mini-games. During this project I gained more experience leading a team. Throughout the term I was the main voice during meetings as I allocated tasks and managed expectations.',
        link: '',
        video: video,
    },
    {
        iconUrl: paint,
        theme: 'btn-back-pink',
        name: 'Brain Painting Application',
        description: 'Developed a Brain Painting Application using Unity with C# scripts. The application consists of multiple functions such as changing colour, shape, angle and size all controllable via a Brain Computer Interaface headset. For this project I gained more tenacity and independent thinking as I continued to create my application with the limited resources provided.',
        link: 'https://github.com/den09879/uniprojects/tree/main/PaintApplicationAssets/Build',
        video: video2,
    },
];