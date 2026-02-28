import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './ImageLightbox.module.css';

const ImageLightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
    const [loadedImages, setLoadedImages] = React.useState(new Set());

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Предзагрузка изображений для лайтбокса
    useEffect(() => {
        if (images && images.length > 0) {
            images.forEach((imgSrc) => {
                if (imgSrc && !loadedImages.has(imgSrc)) {
                    const img = new Image();
                    img.src = imgSrc;
                    img.onload = () => {
                        setLoadedImages((prev) => new Set([...prev, imgSrc]));
                    };
                }
            });
        }
    }, [images]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const currentImage = images[currentIndex];
    const isImageLoaded = currentImage && loadedImages.has(currentImage);

    return (
        <AnimatePresence>
            <motion.div
                className={styles.Lightbox}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleBackdropClick}
            >
                <motion.button
                    className={styles.LightboxClose}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                >
                    <FaTimes />
                </motion.button>

                {images.length > 1 && (
                    <>
                        <motion.button
                            className={styles.LightboxButton}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                onPrev();
                            }}
                        >
                            <FaChevronLeft />
                        </motion.button>

                        <motion.button
                            className={`${styles.LightboxButton} ${styles.LightboxButtonRight}`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                onNext();
                            }}
                        >
                            <FaChevronRight />
                        </motion.button>
                    </>
                )}

                <div className={styles.LightboxContent}>
                    <AnimatePresence mode="wait">
                        {isImageLoaded ? (
                            <motion.img
                                key={currentIndex}
                                src={currentImage}
                                alt={`Project image ${currentIndex + 1}`}
                                className={styles.LightboxImage}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            />
                        ) : (
                            <motion.div
                                key="loading"
                                className={styles.LoadingSpinner}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className={styles.Spinner}></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {images.length > 1 && (
                    <motion.div
                        className={styles.LightboxCounter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {currentIndex + 1} / {images.length}
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default ImageLightbox;