import { NavLink, Outlet } from 'react-router-dom';

function Products() {
    return (
        <>
            <div>Products</div>
            <nav>
                <NavLink to="new">New</NavLink>
                <NavLink to="featured">Featured</NavLink>
            </nav>
            <Outlet />
        </>
    );
}

export default Products;
