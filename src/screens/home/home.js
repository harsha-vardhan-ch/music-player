import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library/library";
import Favourite from "../favourite/favourite";
import Feed from "../feed/feed";
import Player from "../player/player";
import Trending from "../trending/trending";
import "./home.css";
import Login from "../auth/login";
import { setClientToken } from "../../spotify";
import Sidebar from "../../components/sidebar/sidebar";

export default function Home() {
	const [token, setToken] = useState("");

	useEffect(() => {
		const token = window.sessionStorage.getItem("token");
		const hash = window.location.hash;
		window.location.hash = "";
		if (!token && hash) {
            console.log(hash);
			const token_ = hash.split("&")[0].split("=")[1];
			window.sessionStorage.setItem("token", token_);
			setToken(token_);
            setClientToken(token_);
		} else {
			setToken(token);
            setClientToken(token);
		}
        
	}, []);

	return !token ? (
		<Login />
	) : (
		<Router>
			<div className="main-body">
				<Sidebar />
				<Routes>
					<Route path="/" element={<Library />} />
					<Route path="/trending" element={<Trending />} />
					<Route path="/feed" element={<Feed />} />
					<Route path="/player" element={<Player />} />
					<Route path="/favourite" element={<Favourite />} />
				</Routes>
			</div>
		</Router>
	);
}
