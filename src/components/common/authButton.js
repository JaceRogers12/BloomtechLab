import React from "react";
import LoginButton from "./LoginButton.js";
import LogoutButton from "./LogoutButton.js";
import { useAuth0 } from "@auth0/auth0-react";

const AuthButton = () => {
    const {isAuthenticated} = useAuth0();
    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthButton;