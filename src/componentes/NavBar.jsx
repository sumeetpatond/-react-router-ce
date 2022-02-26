import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/lazy-component">Lazy Component</NavLink>
        </nav>
    );
}

export default NavBar;
