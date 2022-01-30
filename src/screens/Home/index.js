import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { config } from "../../config";
import btnLixi from "../../images/btn-lixi.png";
import icSound from "../../images/ic_sound.png";
import icMuteSound from "../../images/ic_sound_mute.png";

const Home = () => {
	const [isLiXi, setIsLiXi] = useState(false);
	const [isMute, setIsMute] = useState(false);

	const onOpenLixi = async () => {
		await setIsMute(false);
		await setIsLiXi(!isLiXi);
	};

	const onOffMMute = () => {
		setIsMute(!isMute);
	};

	return (
		<div className={isLiXi ? "containerLiXi" : "container"}>
			<div className="divSound">
				<img
					className="icSound"
					alt="Sound"
					src={isMute ? icMuteSound : icSound}
					onClick={onOffMMute}
				/>
			</div>

			{isLiXi ? (
				<div style={{ position: "absolute", top: "22%" }}>
					<ReactPlayer
						loop
						controls
						playing={true}
						muted={isMute}
						url={config.video}
					/>
				</div>
			) : (
				<div>
					<img
						src={btnLixi}
						className="btnLixi"
						alt="btnLixi"
						onClick={onOpenLixi}
					/>
					<ReactPlayer
						loop
						playing={true}
						muted={isMute}
						url={config.audio}
						style={{ display: "none" }}
					/>
				</div>
			)}
		</div>
	);
};

export default Home;
