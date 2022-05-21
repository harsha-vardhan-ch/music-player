import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard/songCard";
import Queue from "../../components/queue/queue";
import AudioPlayer from "../../components/audioPlayer/audioPlayer";

export default function Player() {
	const location = useLocation();
	const [tracks, setTracks] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentTrack, setCurrentTrack] = useState({});

	useEffect(() => {
		if (location.state) {
			apiClient
				.get("playlists/" + location.state?.id + "/tracks")
				.then((res) => {
					setTracks(res.data.items);
					setCurrentTrack(res.data.items[0].track);
					console.log(res.data.items);
				});
		}
	}, [location.state]);

	useEffect(() => {
		setCurrentTrack(tracks[currentIndex]?.track);
	}, [currentIndex, tracks]);

	return (
		<div className="screen-container flex">
			<div className="left-player-body">
				<AudioPlayer
					currentTrack={currentTrack}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
					total={tracks}
				/>
			</div>
			<div className="right-player-body">
				<SongCard album={currentTrack?.album} />
				<Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
			</div>
		</div>
	);
}
