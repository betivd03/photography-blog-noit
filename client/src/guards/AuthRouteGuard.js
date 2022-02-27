import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.js";

const AuthRouteGuard = () => {
    const { user } = useContext(AuthContext);

    const token = user.token;

    if (token) {
        return <Outlet />
    } else {
        return <Navigate to='/error' />;
    }
};

export default AuthRouteGuard;