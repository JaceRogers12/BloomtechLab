import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = (props) => {
    const { user } = useAuth0();
    const { name, picture, email } = user;

    return (
        <div className="main">
            <div className="header">
                <div className="header-text-container">
                    <h1>{name}</h1>
                </div>
            </div>
            <img 
                src={picture}
                alt="Profile"
                className="graph-img"
            />
            <h3>{`Email: ${email}`}</h3>
        </div>
    );
};

export default ProfilePage;