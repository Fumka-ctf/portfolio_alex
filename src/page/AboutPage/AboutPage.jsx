import React from 'react';
import { motion } from 'framer-motion';
import stiles from "./AboutPage.module.css"
import NavBar from "../../components/NavBar/NavBar.jsx";
import photo from "../../assets/img/mePhoto.jpg";
import { FaPython, FaDatabase, FaCoffee } from "react-icons/fa";
import { FaServer, FaRocket, FaRobot, FaFileContract } from "react-icons/fa6";

const AboutPage = () => {

    const PythonBE = [
        { id:1, name: "Django", persent: "95"},
        { id:2, name: "FastAPI", persent: "90"},
        { id: 3, name: "Flask", persent: "60"},
        { id: 4, name: "Asyncio", persent: "85"},
        { id: 5, name: "Aiogram", persent: "95"},
        { id: 6, name: "REST API", persent: "67"},
    ]

    const BD = [
        { id: 1, name: "MySql", persent: "87" },
        { id: 2, name: "PostgreSQL", persent: "92" },
        { id: 3, name: "Redis", persent: "90" },
        { id: 4, name: "MongoDB", persent: "80" },
        { id: 5, name: "Kafka", persent: "40" },
        { id: 6, name: "APScheduler", persent: "35" },
        { id: 7, name: "RabbitMQ", persent: "50" },
        { id: 8, name: "Celery", persent: "78" },
    ]

    const DevOps = [
        { id: 1, name: "Docker", persent: "90" },
        { id: 2, name: "Linux", persent: "85" },
        { id: 3, name: "CI/CD", persent: "80" },
    ]

    // Декоративные круги на фоне
    const decorativeCircles = [
        { size: 300, top: '10%', left: '5%' },
        { size: 200, top: '40%', right: '10%' },
        { size: 250, bottom: '20%', left: '15%' },
    ];

    return (
        <motion.div
            className={stiles.ContainerAbout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Декоративные фоновые элементы */}
            <div className={stiles.BackgroundDecorations}>
                {decorativeCircles.map((circle, index) => (
                    <motion.div
                        key={index}
                        className={stiles.DecorativeCircle}
                        style={{
                            width: circle.size,
                            height: circle.size,
                            top: circle.top,
                            left: circle.left,
                            right: circle.right,
                            bottom: circle.bottom
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.1, 0.05],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 20,
                            delay: index * 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className={stiles.NavbarWraper}>
                <NavBar/>
            </div>

            <div className={stiles.GridTitle}>
                <motion.div
                    className={stiles.GridTitleImageBlock}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={stiles.GridTitleImageBG}></div>
                    <img src={photo} className={stiles.GridTitleImage} alt="Profile"/>
                    <motion.div
                        className={stiles.GridTitleBadge}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                        <div className={stiles.BadgeNum}>5+</div>
                        <div className={stiles.BadgeText}>лет опыта</div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={stiles.GridTitleContent}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.h1
                        style={{fontSize: "3rem", marginBottom: "10px"}}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Привет, я
                        <span className={stiles.ContentGradient}> Александр</span>
                    </motion.h1>
                    <motion.p
                        className={stiles.ContentText}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        Python-разработчик с фокусом на создание масштабируемый бэкенд. Начал путь в разработке еще в школе, и за 5 лет превратил хобби в профессию. Так же имею более 2-ух лет коммерческого опыта
                    </motion.p>
                    <motion.p
                        className={stiles.ContentText}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        Работал с клиентами из России, Латвии, Беларуси, Брюсселя, Германии, Нидерландов помогая реализовывать проекты от простых телеграм-ботов до сложных микросервисных архитектур.
                    </motion.p>
                    <motion.div
                        className={stiles.ContentStats}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <motion.div
                            className={stiles.StatsBox}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className={stiles.StatsNum}>5+</div>
                            <div className={stiles.StatsText}>лет опыта</div>
                        </motion.div>
                        <motion.div
                            className={stiles.StatsBox}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className={stiles.StatsNum}>50+</div>
                            <div className={stiles.StatsText}>проектов</div>
                        </motion.div>
                        <motion.div
                            className={stiles.StatsBox}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className={stiles.StatsNum}>50+</div>
                            <div className={stiles.StatsText}>клиентов</div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <div className={stiles.TimeLineSection}>
                {/* Плавающие иконки с анимацией */}
                <motion.div
                    className={stiles.LevitingBadge}
                    style={{top: '350px', right: "350px"}}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                >
                    <FaRocket size={32} />
                </motion.div>

                <motion.div
                    className={stiles.LevitingBadge}
                    style={{top: '650px', left: '350px'}}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 7,
                        delay: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.2, rotate: -15 }}
                >
                    <FaRobot size={32} />
                </motion.div>

                <motion.div
                    className={stiles.LevitingBadge}
                    style={{top: '950px', right: "350px"}}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 6.5,
                        delay: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                >
                    <FaCoffee size={32} />
                </motion.div>

                <motion.div
                    className={stiles.LevitingBadge}
                    style={{top: '1250px', left: "350px"}}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 7.5,
                        delay: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.2, rotate: -15 }}
                >
                    <FaFileContract size={32} />
                </motion.div>



                <div className={stiles.INSContainer}>
                    <motion.h2
                        className={stiles.INSTitle}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Мой путь
                    </motion.h2>
                    <div className={stiles.TimeLine}>
                        <motion.div
                            className={stiles.TimeLineItemR}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={stiles.ItemContentR}>
                                <div className={stiles.ContentDate}>2020 - 2022</div>
                                <h3 className={stiles.ContentTitle}>Начало пути</h3>
                                <p className={stiles.ContentText}>
                                    Изучение Python, Django и основ веб-разработки, онлайн школа. Первые пет-проекты и соревнования.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className={stiles.TimeLineItemL}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={stiles.ItemContentL}>
                                <div className={stiles.ContentDate}>2021 - 2023</div>
                                <h3 className={stiles.ContentTitle}>Первые бот</h3>
                                <p className={stiles.ContentText}>
                                    Создание собственного AI помошника и совершенствование навыков, первые заказы
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className={stiles.TimeLineItemR}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={stiles.ItemContentR}>
                                <div className={stiles.ContentDate}>2023 - 2024</div>
                                <h3 className={stiles.ContentTitle}>Фриланс</h3>
                                <p className={stiles.ContentText}>
                                    Множество нового и полезного опыта работы с клиентами
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className={stiles.TimeLineItemL}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={stiles.ItemContentL}>
                                <div className={stiles.ContentDate}>2025 -Сейчас</div>
                                <h3 className={stiles.ContentTitle}>Первые оферы в компанию</h3>
                                <p className={stiles.ContentText}>
                                    Много заказов в разных сферах и маленькая команда разработчиков и дизайнеров
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <section className={stiles.SkillsSection}>
                <div className={stiles.INSContainer}>
                    <motion.h2
                        className={stiles.INSTitle}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Навыки
                    </motion.h2>
                    <motion.div
                        className={stiles.SkillsGrid}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        <motion.div
                            className={stiles.SkillsCategory}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <h3 className={stiles.SkillsTitle}>
                                <FaPython color="#2a9e81"/>
                                Python & Beckend
                            </h3>
                            {PythonBE.map((skill, index) => (
                                <motion.div
                                    key={skill.id}
                                    className={stiles.SkillsItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className={stiles.SkillsInfo}>
                                        <span>{skill.name}</span>
                                        <span>{skill.persent}%</span>
                                    </div>
                                    <div className={stiles.SkillsBar}>
                                        <motion.div
                                            className={stiles.SkillProgress}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.persent}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className={stiles.SkillsCategory}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <h3 className={stiles.SkillsTitle}>
                                <FaDatabase color="#2a9e81"/>
                                Базы данных
                            </h3>
                            {BD.map((skill, index) => (
                                <motion.div
                                    key={skill.id}
                                    className={stiles.SkillsItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className={stiles.SkillsInfo}>
                                        <span>{skill.name}</span>
                                        <span>{skill.persent}%</span>
                                    </div>
                                    <div className={stiles.SkillsBar}>
                                        <motion.div
                                            className={stiles.SkillProgress}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.persent}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className={stiles.SkillsCategory}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <h3 className={stiles.SkillsTitle}>
                                <FaServer color="#2a9e81"/>
                                DevOps
                            </h3>
                            {DevOps.map((skill, index) => (
                                <motion.div
                                    key={skill.id}
                                    className={stiles.SkillsItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className={stiles.SkillsInfo}>
                                        <span>{skill.name}</span>
                                        <span>{skill.persent}%</span>
                                    </div>
                                    <div className={stiles.SkillsBar}>
                                        <motion.div
                                            className={stiles.SkillProgress}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.persent}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default AboutPage;