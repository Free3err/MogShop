import { NavLink } from 'react-router-dom';
import './style.css';

const Header = ({ children }) => {
    return (
        <header>
            <div className="header_wrapper">
                <NavLink to="/">
                    <div className="logo">MogShop</div>
                </NavLink>
                {children}
            </div>
        </header>
    );
};

export default Header;
