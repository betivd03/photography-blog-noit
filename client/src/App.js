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
import Logout from "./components/Logout";
import AddPhoto from "./components/AddPhoto";
import EditPhoto from "./components/EditPhoto";
import PhotoDetails from "./components/PhotoDetails";
import MyProfile from "./components/MyProfile";
import ErrorPage from "./components/ErrorPage";
import AuthRouteGuard from "./guards/AuthRouteGuard.js";

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
                        <Route path="/logout" element={<Logout />} />
                        <Route element={<AuthRouteGuard />}>
                            <Route path="/add" element={<AddPhoto />} />
                            <Route path="/details/:photoId/edit" element={<EditPhoto />} />
                            <Route path="/my-profile" element={<MyProfile />} />
                        </Route>
                        <Route path="/details/:photoId" element={<PhotoDetails />} />
                        <Route path="/error" element={<ErrorPage />} />
                    </Routes>
                </main>
                <footer>All rights reserved &copy;</footer>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
