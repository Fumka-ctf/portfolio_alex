import project1 from '../assets/img/projectImg/project1.jpg';
import project2 from '../assets/img/projectImg/project2.jpg';
import project3 from '../assets/img/projectImg/project3.jpg';
import project4 from '../assets/img/projectImg/project4.jpg';
import project5 from '../assets/img/projectImg/project5.jpg';
import project6 from '../assets/img/projectImg/project6.jpg';
import project7 from '../assets/img/projectImg/project7.jpg';
import project8 from '../assets/img/projectImg/project8.jpg';
import project9 from '../assets/img/projectImg/project9.jpg';
import project10 from '../assets/img/projectImg/project10.jpg';
import project11 from '../assets/img/projectImg/project11.jpg';

export const projectCategories = [
    { id: 'all', label: 'Все' },
    { id: 'bots', label: 'Боты' },
    { id: 'web', label: 'Веб' }
];

export const projects = [
    {
        id: 1,
        title: 'Advertisements Bot',
        description: 'Телеграм-бот для платного постинга и модерации доски объявлений',
        category: 'bots',
        technologies: ['Python', 'aiogram', 'MySQL', 'APScheduler'],
        images: [project1, project2, project3]
    },
    {
        id: 2,
        title: 'Design Studio',
        description: 'Лендинг дизайнерской студии',
        category: 'web',
        technologies: ['Django', 'PostgreSQL', 'Redis', 'Bootstrap'],
        images: [project4, project5, project6, project7]
    },
    {
        id: 3,
        title: 'GPower',
        description: 'Бот знакомств',
        category: 'bots',
        technologies: ['Python', 'aiogram', 'MySQL'],
        images: [project8, project9]
    },
    {
        id: 4,
        title: 'E-commerce Platform',
        description: 'Полноценная платформа электронной коммерции с админ-панелью',
        category: 'web',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        images: [project10, project11]
    },
    {
        id: 5,
        title: 'Task Manager Bot',
        description: 'Бот для управления задачами с напоминаниями',
        category: 'bots',
        technologies: ['Python', 'aiogram', 'SQLite', 'APScheduler'],
        images: [project1, project3, project5]
    }
];