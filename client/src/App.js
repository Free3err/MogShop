import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Catalog';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Catalog from './pages/Catalog';
import NotFound from './pages/NotFound';

import ScrollToTop from './utils/scrollToTop';

import './css/main.css';

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/sigin" element={<SignIn />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
