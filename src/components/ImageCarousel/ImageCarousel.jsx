import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './ImageCarousel.module.css';

const ImageCarousel = ({ images, onImageClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState(new Set());

    useEffect(() => {
        const preloadImages = () => {
            images.forEach((imgSrc) => {
                const img = new Image();
                img.src = imgSrc;
                img.onload = () => {
                    setLoadedImages((prev) => new Set([...prev, imgSrc]));
                };
            });
        };

        preloadImages();
    }, [images]);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [images.length]);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index, e) => {
        e.stopPropagation();
        setCurrentIndex(index);
    };

    return (
        <div className={styles.Carousel} onClick={() => onImageClick(currentIndex)}>
            <div className={styles.CarouselTrack}>
                {images.map((image, index) => {
                    const offset = index - currentIndex;
                    const isVisible = offset === 0;

                    return (
                        <motion.div
                            key={index}
                            className={styles.CarouselSlide}
                            style={{
                                x: `${offset * 100}%`,
                                opacity: isVisible ? 1 : 0,
                                pointerEvents: isVisible ? 'auto' : 'none'
                            }}
                            animate={{
                                x: `${offset * 100}%`,
                                opacity: isVisible ? 1 : 0
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                        >
                            <img
                                src={image}
                                alt={`Project image ${index + 1}`}
                                className={styles.CarouselImage}
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                        </motion.div>
                    );
                })}
            </div>

            {images.length > 1 && (
                <>
                    <button className={styles.CarouselButton} onClick={prevImage}>
                        <FaChevronLeft />
                    </button>
                    <button className={`${styles.CarouselButton} ${styles.CarouselButtonRight}`} onClick={nextImage}>
                        <FaChevronRight />
                    </button>

                    <div className={styles.CarouselDots}>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.CarouselDot} ${index === currentIndex ? styles.CarouselDotActive : ''}`}
                                onClick={(e) => goToImage(index, e)}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ImageCarousel;