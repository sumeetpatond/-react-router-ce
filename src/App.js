import { Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import About from './componentes/About';
import NavBar from './componentes/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;
