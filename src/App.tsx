import { Main } from './components/Main';
import { Card } from './components/Card';
import Title from './components/Title';
import { useEffect, useState } from 'react';

// Import Icons
import {
    FaCss3Alt,
    FaSass,
    FaPython,
    FaReact,
    FaJava,
    FaVuejs,
    FaElementor,
    FaStrava,
    FaThemeco,
} from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import {
    SiPug,
    SiTailwindcss,
    SiChakraui,
    SiPostgresql,
    SiNodedotjs,
    SiJavascript,
    SiTypescript,
    SiElectron,
    SiCsharp,
    SiCplusplus,
    SiDotnet,
    SiLaravel,
    SiFirebase,
    SiMongodb,
    SiNextdotjs,
    SiArduino,
    SiFlutter,
    SiGoland,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiDart,
    SiMicrobit,
    SiSelenium,
} from 'react-icons/si';
import { BsBootstrap, BsFiletypePhp, BsWordpress } from 'react-icons/bs';
import { VscJson } from 'react-icons/vsc';
import { TbBrandReactNative, TbApi } from 'react-icons/tb';
import { IoLogoIonic } from 'react-icons/io';
import { MdReportGmailerrorred, MdInstallDesktop } from 'react-icons/md';

import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';

function App() {
    const [mobileMenuDisplay, setMobileMenuDisplay] = useState('none');
    const [cardsDisplay, setCardsDisplay] = useState('flex');
    const [projects, setProjects] = useState<
        {
            id: string;
            title: string;
            desc: string;
            date: string;
            technologies: string[];
            image: string;
            url: string;
        }[]
    >([]);
    const projectCollectionRef = collection(db, 'projects');

    useEffect(() => {
        const getProjectList = async () => {
            const data = await getDocs(projectCollectionRef);

            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            })) as {
                id: string;
                title: string;
                desc: string;
                date: string;
                technologies: string[];
                image: string;
                url: string;
            }[];
            console.log(filteredData);

            setProjects(filteredData);
        };

        getProjectList();
    }, []);

    // projectCollectionRef

    const mobileMenuDisplayBlocK = () => {
        setMobileMenuDisplay('block');
        setCardsDisplay('none');
    };

    const mobileMenuDisplayNone = () => {
        setMobileMenuDisplay('none');
        setCardsDisplay('flex');
    };

    function checkDeviceWidth() {
        if (window.matchMedia('(min-width: 700px)').matches) {
            setMobileMenuDisplay('none');
            setCardsDisplay('flex');
        }
    }

    useEffect(() => {
        window.addEventListener('resize', checkDeviceWidth);
        return () => {
            window.removeEventListener('resize', checkDeviceWidth);
        };
    }, []);

    return (
        <div className="App">
            <Main />
            <Title
                mobileMenuDisplay={mobileMenuDisplay}
                mobileMenuDisplayBlocK={mobileMenuDisplayBlocK}
                mobileMenuDisplayNone={mobileMenuDisplayNone}
            />
            <div className="data" style={{ display: cardsDisplay }}>
                {projects
                    .sort((a, b) => b.id.localeCompare(a.id))
                    .map((card) => {
                        return (
                            <a
                                href={card.url}
                                target="_BLANK"
                                style={{ color: 'white' }}
                                key={card.id}
                            >
                                <Card
                                    title={card.title}
                                    desc={card.desc}
                                    date={card.date}
                                    technologies={card.technologies.map(
                                        (technology) => {
                                            switch (technology) {
                                                case 'html':
                                                    return AiOutlineHtml5;
                                                case 'pug':
                                                    return SiPug;
                                                case 'css':
                                                    return FaCss3Alt;
                                                case 'sass':
                                                    return FaSass;
                                                case 'tailwind':
                                                    return SiTailwindcss;
                                                case 'chakraui':
                                                    return SiChakraui;
                                                case 'php':
                                                    return BsFiletypePhp;
                                                case 'sql':
                                                    return SiPostgresql;
                                                case 'node':
                                                    return SiNodedotjs;
                                                case 'javascript':
                                                    return SiJavascript;
                                                case 'typescript':
                                                    return SiTypescript;
                                                case 'python':
                                                    return FaPython;
                                                case 'ajax':
                                                    return VscJson;
                                                case 'electron':
                                                    return SiElectron;
                                                case 'c#':
                                                    return SiCsharp;
                                                case 'c++':
                                                    return SiCplusplus;
                                                case 'dotnet':
                                                    return SiDotnet;
                                                case 'laravel':
                                                    return SiLaravel;
                                                case 'firebase':
                                                    return SiFirebase;
                                                case 'mongodb':
                                                    return SiMongodb;
                                                case 'wordpress':
                                                    return BsWordpress;
                                                case 'elementor':
                                                    return FaElementor;
                                                case 'astra':
                                                    return FaStrava;
                                                case 'ionic':
                                                    return IoLogoIonic;
                                                case 'theme':
                                                    return FaThemeco;
                                                case 'react':
                                                    return FaReact;
                                                case 'reactnative':
                                                    return TbBrandReactNative;
                                                case 'nextjs':
                                                    return SiNextdotjs;
                                                case 'arduino':
                                                    return SiArduino;
                                                case 'flutter':
                                                    return SiFlutter;
                                                case 'java':
                                                    return FaJava;
                                                case 'go':
                                                    return SiGoland;
                                                case 'photoshop':
                                                    return SiAdobephotoshop;
                                                case 'premiere':
                                                    return SiAdobepremierepro;
                                                case 'dart':
                                                    return SiDart;
                                                case 'vue':
                                                    return FaVuejs;
                                                case 'microbit':
                                                    return SiMicrobit;
                                                case 'api':
                                                    return TbApi;
                                                case 'selenium':
                                                    return SiSelenium;
                                                case 'bootstrap':
                                                    return BsBootstrap;
                                                case 'pythonpkg':
                                                    return MdInstallDesktop;
                                                default:
                                                    return MdReportGmailerrorred;
                                            }
                                        },
                                    )}
                                    image={card.image}
                                    key={card.id}
                                />
                            </a>
                        );
                    })}
            </div>
        </div>
    );
}

export default App;
