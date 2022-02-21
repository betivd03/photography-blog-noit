import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from "./components/Register";
import AddPhoto from "./components/AddPhoto";
import EditPhoto from "./components/EditPhoto";
import PhotoDetails from "./components/PhotoDetails";
import ErrorPage from "./components/ErrorPage";

function App() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/add" element={<AddPhoto />} />
                <Route path="/edit" element={<EditPhoto />} />
                <Route path="/details" element={<PhotoDetails />} />
                <Route path="/error" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}

export default App;
