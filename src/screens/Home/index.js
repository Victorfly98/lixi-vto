import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { config } from "../../config";
import btnLixi from "../../images/btn-lixi.png";
import icSound from "../../images/ic_sound.png";
import icMuteSound from "../../images/ic_sound_mute.png";

const Home = () => {
	const [isLiXi, setIsLiXi] = useState(false);
	const [playAudio, setPlayAudio] = useState(false);
	const [playVideo, setPlayVideo] = useState(true);

	const onOpenLixi = async () => {
		await setPlayAudio(false);
		await setIsLiXi(!isLiXi);
	};

	const onPlayAudio = () => {
		setPlayAudio(!playAudio);
	};

	const onPlayVideo = () => {
		setPlayVideo(!playVideo);
	};

	return (
		<div className={isLiXi ? "containerLiXi" : "container"}>
			{isLiXi ? (
				<>
					<div className="divSound">
						<img
							className="icSound"
							alt="Sound"
							src={playVideo ? icSound : icMuteSound}
							onClick={onPlayVideo}
						/>
					</div>
					<div style={{ position: "absolute", top: "22%" }}>
						<ReactPlayer
							className="playVideo"
							loop
							controls
							playing={playVideo}
							url={config.video}
							onPlay={() => setPlayVideo(true)}
							onPause={() => setPlayVideo(false)}
						/>
					</div>
				</>
			) : (
				<>
					<div className="divSound">
						<img
							className="icSound"
							alt="Sound"
							src={playAudio ? icSound : icMuteSound}
							onClick={onPlayAudio}
						/>
					</div>
					<img
						src={btnLixi}
						className="btnLixi"
						alt="btnLixi"
						onClick={onOpenLixi}
					/>
					<ReactPlayer
						loop
						playing={playAudio}
						url={config.audio}
						style={{ display: "none" }}
					/>
				</>
			)}
		</div>
	);
};

export default Home;
