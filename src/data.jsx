import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
} from 'react-icons/fa';
import {FiFileText, FiUser, FiExternalLink} from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpeg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpeg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className='nav__icon'/>,
        path: '/',
    },

    {
        id: 2,
        name: 'About',
        icon: <FaUser className='nav__icon'/>,
        path: '/about',
    },

    {
        id: 3,
        name: 'Portfolio',
        icon: <FaFolderOpen className='nav__icon'/>,
        path: '/portfolio',
    },

    {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav__icon'/>,
        path: '/contact',
    },
];

export const personalInfo = [
    {
        id: 1,
        title: 'First Name : ',
        description: 'Abbosxon',
    },

    {
        id: 2,
        title: 'Last Name : ',
        description: 'Abdujalilov',
    },

    {
        id: 3,
        title: 'Age : ',
        description: '19 Years',
    },

    {
        id: 4,
        title: 'Nationality : ',
        description: 'Uzbek',
    },

    {
        id: 5,
        title: 'Freelance : ',
        description: 'Available',
    },

    {
        id: 6,
        title: 'Address : ',
        description: 'Uzbekistan',
    },

    {
        id: 7,
        title: 'Phone : ',
        description: '+998908612675',
    },

    {
        id: 8,
        title: 'Email : ',
        description: 'abbosxon28012004@gmail.com',
    },

    {
        id: 9,
        title: 'Telegram : ',
        description: '@abbosxon04',
    },

    {
        id: 10,
        title: 'Langages : ',
        description: 'Uzbek, English',
    },
];

export const stats = [
    {
        id: 1,
        no: '1+',
        title: 'Years of <br /> Experience',
    },

    {
        id: 2,
        no: '4+',
        title: 'Completed <br /> Projects',
    },

    {
        id: 3,
        no: '2+',
        title: 'Happy <br /> Customers',
    },

    {
        id: 4,
        no: '10+',
        title: ' Earned <br /> Certificates',
    },
];

export const resume = [
    {
        id: 1,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: '2023 July - 2023 December',
        title: 'Backend Developer Student<span> Epam Systems </span>',
        desc: 'Worked in internal project that manages events in Microsoft Outlook and Microsoft Teams, improved emailing and timezone parts.',
    },

    {
        id: 2,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: '2023 May - 2023 July',
        title: 'FullStack Developer Student <span> Epam Systems </span>',
        desc: 'Worked in internal project - Cloud Gant, task management project, implemented creating and editing tasks part.',
    },

    {
        id: 3,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: '2023 January - 2023 May',
        title: 'Java Developer Intern <span> Epam Systems Laboratory </span>',
        desc: 'Gained additional skills, developed some small tasks.',
    },

    {
        id: 4,
        category: 'education',
        icon: <FaGraduationCap/>,
        year: '2021 - 2025',
        title: 'Bachelors Degree <span> KIUF University </span>',
        desc: 'Learned Computer science subjects',
    },

    {
        id: 5,
        category: 'education',
        icon: <FaGraduationCap/>,
        year: '2021 - 2022',
        title: 'Student <span> PDP academy, Epam Systems Lab  </span>',
        desc: 'Learned Java Backend Development course and create some small student projects',
    },

    {
        id: 6,
        category: 'education',
        icon: <FaGraduationCap/>,
        year: '2010 - 2021',
        title: 'Student <span> Middle School </span>',
        desc: 'Learned main specialized subjects like English, Math and other all subjects',
    },
];

export const skills = [
    {
        id: 1,
        title: 'Html',
        percentage: '60',
    },

    {
        id: 2,
        title: 'Javascript',
        percentage: '40',
    },

    {
        id: 3,
        title: 'Css',
        percentage: '70',
    },

    {
        id: 4,
        title: 'Java',
        percentage: '80',
    },

    {
        id: 5,
        title: 'React',
        percentage: '30',
    },

    {
        id: 6,
        title: 'Git & Github',
        percentage: '60',
    },

    {
        id: 7,
        title: 'Communication',
        percentage: '90',
    },

    {
        id: 8,
        title: 'Management',
        percentage: '45',
    },
];

export const portfolio = [
    {
        id: 1,
        img: Work1,
        title: 'Creating web-service',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Web-service for Horse Race',
            },
            {
                icon: <FiUser/>,
                title: 'Client : ',
                desc: 'Mentor',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'Java',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Preview : ',
                desc: 'https://github.com/Abbosxon2004/Race',
            },
        ],
    },
    {
        id: 2,
        img: Work2,
        title: 'Creating web-service',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Web-service for question-answer form',
            },
            {
                icon: <FiUser/>,
                title: 'Client : ',
                desc: 'Teacher',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'Java & JavaScript',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Preview : ',
                desc: 'https://github.com/Abbosxon2004/questionsanswersproject',
            },
        ],
    },
    {
        id: 3,
        img: Work3,
        title: 'Creating web-site',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Web-service for task management',
            },
            {
                icon: <FiUser/>,
                title: 'Client : ',
                desc: 'Epam Systems',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'Java & JavaScript(React)',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Preview : ',
                desc: 'Confidential',
            },
        ],
    },
    {
        id: 4,
        img: Work4,
        title: 'Creating Telegram bot',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Yandex dictionary bot',
            },
            {
                icon: <FiUser/>,
                title: 'Client : ',
                desc: 'People',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'Java',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Preview : ',
                desc: 'https://github.com/Abbosxon2004/Yandex-dictionary-bot',
            },
        ],
    },

    {
        id: 5,
        img: Work5,
        title: 'Improving web site',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Event management',
            },
            {
                icon: <FiUser/>,
                title: 'Client : ',
                desc: 'Epam Systems',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'Java',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Preview : ',
                desc: 'Confidential',
            },
        ],
    }
];

export const themes = [
    {
        id: 1,
        img: Theme1,
        color: 'hsl(252, 35%, 51%)',
    },

    {
        id: 2,
        img: Theme2,
        color: 'hsl(4, 93%, 54%)',
    },

    {
        id: 3,
        img: Theme3,
        color: 'hsl(271, 76%, 53%)',
    },

    {
        id: 4,
        img: Theme4,
        color: 'hsl(225, 73%, 57%)',
    },

    {
        id: 5,
        img: Theme5,
        color: 'hsl(43, 74%, 49%)',
    },

    {
        id: 6,
        img: Theme6,
        color: 'hsl(339, 81%, 66%)',
    },

    {
        id: 7,
        img: Theme7,
        color: 'hsl(80, 61%, 50%)',
    },

    {
        id: 8,
        img: Theme8,
        color: 'hsl(19, 96%, 52%)',
    },

    {
        id: 9,
        img: Theme9,
        color: 'hsl(88, 65%, 43%)',
    },

    {
        id: 10,
        img: Theme10,
        color: 'hsl(42, 100%, 50%)',
    },
];
