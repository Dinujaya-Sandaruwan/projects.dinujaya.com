import { Main } from './components/Main';
import { Card } from './components/Card';
import Title from './components/Title';
import { useState } from 'react';
import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa';
import data from './data.json';
function App() {
    const [mobileMenuDisplay, setMobileMenuDisplay] = useState('none');
    const [cardsDisplay, setCardsDisplay] = useState('flex');

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

    window.addEventListener('resize', checkDeviceWidth);
    return (
        <div className="App">
            <Main />
            <Title
                mobileMenuDisplay={mobileMenuDisplay}
                mobileMenuDisplayBlocK={mobileMenuDisplayBlocK}
                mobileMenuDisplayNone={mobileMenuDisplayNone}
            />
            <div className="data" style={{ display: cardsDisplay }}>
                {data.map((card) => {
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
                                        // Add more cases for other technologies as needed
                                        default:
                                            return FaNodeJs;
                                    }
                                },
                            )}
                            image={card.image}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
