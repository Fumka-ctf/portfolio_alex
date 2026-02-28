import React, { useState, useEffect } from 'react';
import style from './RunText.module.css'; // Импортируем стили ниже

const phrases = [
    "Fullstack developer.",
    "Чистый и быстрый результат.",
    "Vue, Angular, Node.js.",
    "Django, FastAPI, Python.",
];

const Typewriter = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Текущая фраза
    const currentText = phrases[index];

    // Логика печати и удаления
    useEffect(() => {
        if (subIndex === currentText.length + 1 && !reverse) {
            // Текст полностью напечатан -> Ждем паузу перед удалением
            const timeout = setTimeout(() => {
                setReverse(true);
            }, 2000); // Пауза 2 секунды
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            // Текст полностью удален -> Переходим к следующей фразе
            setReverse(false);
            setIndex((prev) => (prev + 1) % phrases.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, currentText]);

    // Мигание курсора
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <div className={style.TypeWriter}>
            <div className={style.typewriterContainer} style={{ fontSize: '24px', fontFamily: 'monospace' }}>
                <span>
                    {currentText.substring(0, subIndex)}
                    <span className={`cursor ${blink ? 'visible' : 'hidden'}`}>|</span>
                </span>

                <style>{`
                        .cursor.visible {
                          opacity: 1;
                        }
                        .cursor.hidden {
                          opacity: 0;
                        }
                        /* Плавность не нужна для шагов, но можно добавить transition для цвета */
                      `}
                </style>
            </div>
        </div>
    );
};

export default Typewriter;