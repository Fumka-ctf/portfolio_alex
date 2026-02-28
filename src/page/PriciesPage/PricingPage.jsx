import React, { useState } from 'react';
import styles from './PricingPage.module.css';
import NavBar from "../../components/NavBar/NavBar.jsx";
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaChevronDown,
    FaServer,
    FaFlask,
    FaFileAlt,
    FaDatabase,
    FaShieldAlt,
    FaBolt,
    FaHeadset,
    FaInfoCircle
} from 'react-icons/fa';
import { tabs, pricingData, additionalServices, faqData, CONTACT_URL } from '../../API/PricingData.js';

const iconMap = {
    server: FaServer,
    flask: FaFlask,
    fileAlt: FaFileAlt,
    database: FaDatabase,
    shieldAlt: FaShieldAlt,
    bolt: FaBolt,
    headset: FaHeadset
};

const PricingPage = () => {
    const [activeTab, setActiveTab] = useState('bots');
    const [openFaqIndex, setOpenFaqIndex] = useState(-1);

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        }),
        exit: { opacity: 0, y: -30, transition: { duration: 0.3 } }
    };

    const serviceCardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.4
            }
        })
    };

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? -1 : index);
    };

    const getIcon = (iconKey) => {
        const IconComponent = iconMap[iconKey];
        return IconComponent ? <IconComponent /> : null;
    };

    return (
        <>
            <div className={styles.Container}>
                <div className={styles.NavbarWraper}>
                    <NavBar />
                </div>
                <div className={styles.Title}>
                    <motion.h1
                        className={styles.H1Title}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Прайс-лист
                    </motion.h1>
                    <motion.p
                        className={styles.PTitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Прозрачное ценообразование без скрытых платежей
                    </motion.p>

                    <motion.div
                        className={styles.PricingTag}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab.id}
                                className={activeTab === tab.id ? styles.TagBtnActive : styles.TagBtn}
                                onClick={() => setActiveTab(tab.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tab.label}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        className={styles.PricingCards}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {pricingData[activeTab].plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                className={`${styles.PricingCard} ${plan.popular ? styles.Popular : ''}`}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                custom={index}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                {plan.popular && (
                                    <motion.div
                                        className={styles.PopularBadge}
                                        initial={{ scale: 0, rotate: -10 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                    >
                                        ПОПУЛЯРНОЕ
                                    </motion.div>
                                )}

                                <div className={styles.CardHeader}>
                                    <h3 className={styles.PlanName}>{plan.name}</h3>
                                    <div className={styles.PlanPrice}>{plan.price}</div>
                                    <p className={styles.PlanDescription}>{plan.description}</p>
                                </div>

                                <ul className={styles.FeaturesList}>
                                    {plan.features.map((feature, idx) => (
                                        <motion.li
                                            key={idx}
                                            className={styles.FeatureItem}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 + (idx * 0.1) }}
                                        >
                                            <span className={styles.Checkmark}>✓</span>
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>

                                <motion.a
                                    href={plan.contactUrl || CONTACT_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.OrderButton} ${plan.popular ? styles.Primary : styles.Secondary}`}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
                                >
                                    {plan.buttonText}
                                </motion.a>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    className={styles.AdditionalServicesSection}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.AdditionalServicesHeader}>
                        <motion.h2
                            className={styles.AdditionalServicesTitle}
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Дополнительные услуги
                        </motion.h2>
                        <motion.p
                            className={styles.AdditionalServicesSubtitle}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Доступны для всех типов проектов
                        </motion.p>
                    </div>

                    <div className={styles.ServicesGrid}>
                        {additionalServices.map((service, index) => (
                            <motion.div
                                key={index}
                                className={styles.ServiceCard}
                                variants={serviceCardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div
                                    className={styles.GradientLine}
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />

                                <div className={styles.ServiceIcon}>
                                    {getIcon(service.iconKey)}
                                </div>

                                <h3 className={styles.ServiceTitle}>{service.title}</h3>

                                <div className={styles.ServicePrice}>{service.price}</div>

                                <p className={styles.ServiceDescription}>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className={styles.ServicesNote}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <FaInfoCircle className={styles.NoteIcon} />
                        <p>
                            Цены указаны за услугу в рамках одного проекта.
                            При заказе нескольких дополнительных услуг предоставляется скидка 10%.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.FaqSection}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.FaqHeader}>
                        <motion.h2
                            className={styles.FaqTitle}
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Частые вопросы
                        </motion.h2>
                    </div>

                    <div className={styles.FaqList}>
                        {faqData.map((faq, index) => (
                            <motion.div
                                key={index}
                                className={`${styles.FaqItem} ${openFaqIndex === index ? styles.FaqItemOpen : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <button
                                    className={styles.FaqQuestion}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span>{faq.question}</span>
                                    <motion.div
                                        animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FaChevronDown className={styles.FaqIcon} />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openFaqIndex === index && (
                                        <motion.div
                                            className={styles.FaqAnswer}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <p>{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default PricingPage;