import React, { useState, useEffect } from "react";
import { GetHeadProfileData } from "../api/GetHeadProfileData";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/editProfile.scss";
import ProfileHead from "./ProfileHead";
import ProfileBody from "./ProfileBody";

export function ProfileData({ children }) {
    const [profile, setProfile] = useState([]);
  
    useEffect(() => {
      const getDataProfile = async () => {
        try {
          const response = await GetHeadProfileData();
          setProfile(response);
        } catch (error) {
          console.log(error);
        }
      };
      
      getDataProfile();
    }, []);
  
    return children(profile);
  }

function Profile(){
    return (
        <div className="con-edit-profile">
            <ProfileHead />
            <ProfileBody />
        </div>
    );
}

export default Profile;