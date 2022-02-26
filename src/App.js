import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import About from './componentes/About';
import NavBar from './componentes/NavBar';
import OrderSummary from './componentes/OrderSummary';
import PageNotFound from './componentes/PageNotFound';
import Products from './componentes/Products';
import NewProducts from './componentes/NewProducts';
import FeaturedProducts from './componentes/FeaturedProducts';
import Users from './componentes/Users';
import Color from './componentes/Color';
const LazyComponent = lazy(() => import('./componentes/LazyComponent'));

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/lazy-component"
                    element={
                        <Suspense fallback="Loading........">
                            <LazyComponent />
                        </Suspense>
                    }
                />
                <Route path="/order-summary" element={<OrderSummary />} />
                <Route path="products" element={<Products />}>
                    <Route index element={<FeaturedProducts />} />
                    <Route path="new" element={<NewProducts />} />
                    <Route path="featured" element={<FeaturedProducts />} />
                </Route>
                <Route path="/users/:id" element={<Users />} />
                <Route path="color" element={<Color />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
