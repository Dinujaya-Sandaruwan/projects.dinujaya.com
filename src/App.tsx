import { Main } from './components/Main';
import { Card } from './components/Card';
import Title from './components/Title';
import { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa';

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
            }[];

            console.log(filteredData);

            setProjects(filteredData);
        };

        getProjectList();
    }, [projectCollectionRef]);

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
                {projects.map((card) => {
                    return (
                        <Card
                            title={card.title}
                            desc={card.desc}
                            date={card.date}
                            technologies={card.technologies.map(
                                (technology) => {
                                    switch (technology) {
                                        case 'FaReact':
                                            return FaReact;
                                        case 'FaSass':
                                            return FaSass;
                                        case 'FaNodeJs':
                                            return FaNodeJs;
                                        default:
                                            return FaNodeJs;
                                    }
                                },
                            )}
                            image={card.image}
                            key={card.id}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
