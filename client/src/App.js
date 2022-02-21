import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from "./components/Register";

function App() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
