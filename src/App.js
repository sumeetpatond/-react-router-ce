import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import About from './componentes/About';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
