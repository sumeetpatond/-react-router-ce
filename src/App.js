import { Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import About from './componentes/About';
import NavBar from './componentes/NavBar';
import OrderSummary from './componentes/OrderSummary';
import PageNotFound from './componentes/PageNotFound';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/order-summary" element={<OrderSummary />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
