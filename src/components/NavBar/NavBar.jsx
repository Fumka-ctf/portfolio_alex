import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './NavBar.module.css';
import logo from '../../assets/img/logo.png';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = isMobileMenuOpen ? 'unset' : 'hidden';
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    const navLinks = [
        { to: '/', label: 'main' },
        { to: '/about', label: 'about me' },
        { to: '/project', label: 'project' },
        { to: '/pricing', label: 'pricing' }
    ];

    return (
        <>
            <div className={styles.NavBarContainer}>
                <Link className={styles.LogoWrapper} to='/' onClick={closeMobileMenu}>
                    <img className={styles.Logo} src={logo} alt="logo" />
                </Link>

                {/* Desktop Menu */}
                <nav className={styles.NavMenu}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `${styles.NavItem} ${isActive ? styles.Active : ''}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Desktop Contact Button */}
                <a className={styles.ContactButton} href="https://t.me/jle4alika" target="_blank">
                    Связаться со мной
                </a>

                {/* Burger Button (Mobile) */}
                <button
                    className={`${styles.BurgerButton} ${isMobileMenuOpen ? styles.Active : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span className={styles.BurgerLine}></span>
                    <span className={styles.BurgerLine}></span>
                    <span className={styles.BurgerLine}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className={styles.MobileMenuOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeMobileMenu}
                    >
                        <motion.div
                            className={styles.MobileMenu}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `${styles.MobileNavItem} ${isActive ? styles.Active : ''}`
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <a
                                className={styles.MobileContactButton}
                                href="https://t.me/jle4alika"
                                target="_blank"
                                onClick={closeMobileMenu}
                            >
                                Связаться со мной
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;