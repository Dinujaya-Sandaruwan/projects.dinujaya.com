import { Main } from './components/Main';
import { Card } from './components/Card';
import Title from './components/Title';
function App() {
    return (
        <div className="App">
            <Main />
            <Title />
            <div className="data">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default App;
