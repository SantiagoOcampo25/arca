import React from "react";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/editProfile.scss";
import ProfileHead from "./ProfileHead";
import ProfileBody from "./ProfileBody";

function Profile(){
    return (
        <div className="con-edit-profile">
            <ProfileHead />
            <ProfileBody />
        </div>
    );
}

export default Profile;