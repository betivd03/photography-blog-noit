import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthContext } from "./contexts/AuthContext.js";
import useLocalStorage from "./hooks/useLocalStorage.js";

import Header from './components/Header';
import Home from './components/Home';
import Gallery from "./components/Gallery";
import About from "./components/About";
import Login from './components/Login';
import Register from "./components/Register";
import AddPhoto from "./components/AddPhoto";
import EditPhoto from "./components/EditPhoto";
import PhotoDetails from "./components/PhotoDetails";
import ErrorPage from "./components/ErrorPage";

const initialAuth = {
    email: "",
    username: "",
    token: "",
    _id: ""
};

function App() {

    const [user, setUser] = useLocalStorage('user', initialAuth);

    const login = (authData) => {
        setUser(authData);
    };

    const register = (authData) => {
        setUser(authData);
    };

    const logout = () => {
        setUser(initialAuth);
    };

    return (
        <AuthContext.Provider value={{user, login, register, logout}} >
            <div className="layout">
                <Header />
                <main className="app-main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/add" element={<AddPhoto />} />
                        <Route path="/edit" element={<EditPhoto />} />
                        <Route path="/details" element={<PhotoDetails />} />
                        <Route path="/error" element={<ErrorPage />} />
                    </Routes>
                </main>
                <footer>All rights reserved &copy;</footer>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
