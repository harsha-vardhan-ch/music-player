import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdDashboard } from "react-icons/md"
import { FaPlayCircle } from "react-icons/fa"
import { FaFire } from "react-icons/fa"
import { MdFavorite } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";

import appClient from "../../spotify";

export default function Sidebar() {
    const [image, setImage]=useState("");
    useEffect(() =>{
        appClient.get("me").then((response)=>{
            setImage(response.data.images[0].url);
        });
    },[]);

	return (
        <div className="sidebar-container">
            <img src={image} className="profile-img" alt="Profile pic"/>
            <div>
                <SidebarButton title="Feed" to="/feed" icon={ <MdDashboard/> }/>
                <SidebarButton title="Trending" to="/trending" icon={ <FaFire/> }/>
                <SidebarButton title="Player" to="/player" icon={ <FaPlayCircle/> }/>
                <SidebarButton title="Favourites" to="/favourite" icon={ <MdFavorite/> } />
                <SidebarButton title="Library" to="/" icon={ <IoLibrary />} />
            </div>
            <SidebarButton title="Library" to="" icon={ <GoSignOut/> } />
        </div>
    );
}