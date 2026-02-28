import React from 'react';
import NavBar from "../../components/NavBar/NavBar.jsx";
import StilesMain from "./Main.module.css"
import Typewriter from "../../components/RunText/RunTex.jsx";
import { FaDatabase, FaCode, FaTools } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import meGif from  '../../assets/img/cat-computer.gif'
import CardAnimated from "../../components/CardAnimeyted/CardAnimated.jsx";


const MainPage = () => {
    return (
        <div className={StilesMain.container}>
            <div className={StilesMain.HideNav}>
                <NavBar />
            </div>
                <a href="https://t.me/jle4alika" target="_blank" className={StilesMain.LinkMeBtn}>
                    <h1 className={StilesMain.LinkMeTitle}>Связь со мной</h1>
                    <h5 className={StilesMain.LinkMeUnderText}>Тыкни на меня!!!</h5>
                </a>
            <div className={StilesMain.AboutBlock}>
                <h2 className={StilesMain.AboutTitle}>
                    Привет.<br />
                    Меня зовут Александр,
                    я Fullstack разработчик.
                </h2>
                <Typewriter className={StilesMain.TypeWriter} />
                <h3 className={StilesMain.AboutText}>
                    Создаю высоконагруженные бэкенд-системы, REST API и микросервисную архитектуру. Специализируюсь на Django, FastAPI и современных базах данных.
                </h3>
                    <CardAnimated
                        image={meGif}
                        tiltIntensity={20}
                    />
            </div>
            <div className={StilesMain.StackTitle}>
                <div className={StilesMain.StackText}>
                    <h1 className='text-end text-4xl text-(--white) mb-5'>FullStack Developer</h1>
                    <p className='text-end text-9xl text-(--white)'>JLe4alika</p>
                </div>
                <div className={StilesMain.StackHideTitle}>
                    <h1>Мой технологический стек</h1>
                </div>
                <div className={StilesMain.StackGrid}>
                    <div className={StilesMain.StackItems}>
                        <h3 className={StilesMain.StackItemTitle}>
                            <FaDatabase />
                            DataBase
                        </h3>
                        <div className={StilesMain.StackItemTags}>
                            <span className={StilesMain.StackItemTag}>PostgreSQL</span>
                            <span className={StilesMain.StackItemTag}>MySQL</span>
                            <span className={StilesMain.StackItemTag}>MongoDB</span>
                            <span className={StilesMain.StackItemTag}>Redis</span>
                            <span className={StilesMain.StackItemTag}>ChromeDB</span>
                        </div>
                    </div>
                    <div className={StilesMain.StackItems}>
                        <h3 className={StilesMain.StackItemTitle}>
                            <FaServer />
                            Backend
                        </h3>
                        <div className={StilesMain.StackItemTags}>
                            <span className={StilesMain.StackItemTag}>Python</span>
                            <span className={StilesMain.StackItemTag}>Django</span>
                            <span className={StilesMain.StackItemTag}>FastAPI</span>
                            <span className={StilesMain.StackItemTag}>Flask</span>
                            <span className={StilesMain.StackItemTag}>Celery</span>
                            <span className={StilesMain.StackItemTag}>Kafka</span>
                        </div>
                    </div>
                    <div className={StilesMain.StackItems}>
                        <h3 className={StilesMain.StackItemTitle}>
                            <FaCode />
                            Frontend
                        </h3>
                        <div className={StilesMain.StackItemTags}>
                            <span className={StilesMain.StackItemTag}>HTML5/CSS3</span>
                            <span className={StilesMain.StackItemTag}>TypeScript</span>
                            <span className={StilesMain.StackItemTag}>React</span>
                            <span className={StilesMain.StackItemTag}>Vue</span>
                            <span className={StilesMain.StackItemTag}>Angular</span>
                            <span className={StilesMain.StackItemTag}>TailwindCSS</span>
                            <span className={StilesMain.StackItemTag}>Figma</span>
                        </div>
                    </div>
                    <div className={StilesMain.StackItems}>
                        <h3 className={StilesMain.StackItemTitle}>
                            <FaTools />
                            DevOps
                        </h3>
                        <div className={StilesMain.StackItemTags}>
                            <span className={StilesMain.StackItemTag}>Git</span>
                            <span className={StilesMain.StackItemTag}>Docker</span>
                            <span className={StilesMain.StackItemTag}>Linux</span>
                            <span className={StilesMain.StackItemTag}>Nginx</span>
                            <span className={StilesMain.StackItemTag}>CI/CD</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={StilesMain.main}>
                <NavBar/>
            </div>

            <svg width={0} height={0}>
                <clipPath id="main" clipPathUnits='objectBoundingBox'>
                    <path
                        d="M0.714,0 A0.029,0.056,0,0,1,0.743,0.056 L0.743,0.111 A0.029,0.056,0,0,0,0.771,0.167 L0.886,0.167 L0.971,0.167 A0.029,0.056,0,0,1,1,0.222 L1,0.944 A0.029,0.056,0,0,1,0.971,1 L0.4,1 A0.029,0.056,0,0,1,0.371,0.944 L0.371,0.811 A0.029,0.056,0,0,0,0.343,0.756 L0.029,0.756 A0.029,0.056,0,0,1,0,0.7 L0,0.056 A0.029,0.056,0,0,1,0.029,0"/>
                </clipPath>
             </svg>
        </div>
    );
};

export default MainPage;