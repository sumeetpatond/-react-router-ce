import { Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import About from './componentes/About';
import NavBar from './componentes/NavBar';
import OrderSummary from './componentes/OrderSummary';
import PageNotFound from './componentes/PageNotFound';
import Products from './componentes/Products';
import NewProducts from './componentes/NewProducts';
import FeaturedProducts from './componentes/FeaturedProducts';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/order-summary" element={<OrderSummary />} />
                <Route path="products" element={<Products />}>
                    <Route index element={<FeaturedProducts />} />
                    <Route path="new" element={<NewProducts />} />
                    <Route path="featured" element={<FeaturedProducts />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
