import { NavLink } from 'react-router-dom';

import './style.css';

const SignNavBar = () => {
    return (
        <nav>
            <div className="signNavBar_wrapper">
                <div className="signNavBar">
                    <NavLink to="/signup">
                        <button className="signUp">Sign Up</button>
                    </NavLink>
                    <NavLink to="/signin">
                        <button className="signIn">Sign In</button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default SignNavBar;
