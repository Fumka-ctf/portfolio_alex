import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from "../../components/NavBar/NavBar.jsx";
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel.jsx';
import ImageLightbox from '../../components/ImageLightbox/ImageLightbox.jsx';
import { projectCategories, projects } from '../../API/ProjectData.js';
import styles from './ProjectPage.module.css';

const ProjectsPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [lightboxImages, setLightboxImages] = useState([]);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const openLightbox = (images, index) => {
        setLightboxImages(images);
        setLightboxIndex(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const nextLightboxImage = () => {
        setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
    };

    const prevLightboxImage = () => {
        setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
    };

    const cardVariants = {
        hidden: (i) => ({
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }),
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }),
        exit: (i) => ({
            opacity: 0,
            scale: 0.9,
            transition: {
                delay: i * 0.05,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <>
            <div className={styles.Container}>
                <div className={styles.NavbarWraper}>
                    <NavBar />
                </div>

                <div className={styles.Header}>
                    <motion.h1
                        className={styles.Title}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        Мои проекты
                    </motion.h1>
                    <motion.p
                        className={styles.Subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Подборка работ в различных направлениях
                    </motion.p>

                    <motion.div
                        className={styles.CategoryTabs}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        {projectCategories.map((category, index) => (
                            <motion.button
                                key={category.id}
                                className={`${styles.CategoryTab} ${activeCategory === category.id ? styles.CategoryTabActive : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{
                                    delay: 0.5 + (index * 0.1),
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15
                                }}
                                whileHover={{
                                    scale: 1.08,
                                    y: -3,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category.label}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    className={styles.ProjectsGrid}
                    variants={gridVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className={styles.ProjectCard}
                                variants={cardVariants}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                layout
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <ImageCarousel
                                    images={project.images}
                                    onImageClick={(localIndex) => openLightbox(project.images, localIndex)}
                                />

                                <div className={styles.ProjectContent}>
                                    <h3 className={styles.ProjectTitle}>{project.title}</h3>
                                    <p className={styles.ProjectDescription}>{project.description}</p>

                                    <div className={styles.ProjectTech}>
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={techIndex}
                                                className={styles.TechTag}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    delay: 0.5 + (techIndex * 0.05),
                                                    duration: 0.3
                                                }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <motion.div
                        className={styles.EmptyState}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            type: "spring",
                            stiffness: 200
                        }}
                    >
                        <p>Проекты в этой категории скоро появятся</p>
                    </motion.div>
                )}
            </div>

            {isLightboxOpen && (
                <ImageLightbox
                    images={lightboxImages}
                    currentIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onNext={nextLightboxImage}
                    onPrev={prevLightboxImage}
                />
            )}
        </>
    );
};

export default ProjectsPage;