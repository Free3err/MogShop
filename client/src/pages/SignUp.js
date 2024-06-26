import { useState } from 'react';

import Header from '../components/header/Header';
import SignNavBar from '../components/signnavbar/SignNavBar';

import '../css/signUp.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password_1, setPassword_1] = useState('');
    const [password_2, setPassword_2] = useState('');

    const errorSignal = (error) => {
        error.style.color = 'red';
        setTimeout(() => {
            error.style.color = 'white';
        }, 3000);
    };

    const confirm_reg = (event) => {
        event.preventDefault();

        let errorElement = document.querySelector('.error');

        if (password_1 !== password_2 || password_1.length < 8) {
            errorSignal(errorElement);
        } else {
            const data = {
                username: username,
                password: password_1,
            };

            try {
                const response = fetch('localhost:8080/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <>
            <Header>
                <SignNavBar />
            </Header>
            <main>
                <div className="main_wrapper">
                    <div className="block">
                        <span className="title_signup">
                            Sign up to <strong>MogShop</strong>
                        </span>
                        <form onSubmit={confirm_reg} className="signUp_form">
                            <span className="error">
                                {password_1 && password_2
                                    ? password_1 === password_2
                                        ? password_1.length < 8
                                            ? 'Password should be at least 8 characters long'
                                            : ''
                                        : "Passwords aren't the same"
                                    : ' '}
                            </span>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                            ></input>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password_1}
                                onChange={(event) => {
                                    setPassword_1(event.target.value);
                                }}
                            ></input>
                            <input
                                type="password"
                                placeholder="Repeat password"
                                value={password_2}
                                onChange={(event) => {
                                    setPassword_2(event.target.value);
                                }}
                            ></input>
                            <button type="submit">Sign up</button>
                            <span>
                                <a href="/forgot_password" className="link">
                                    Forgot password?
                                </a>
                            </span>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SignUp;
