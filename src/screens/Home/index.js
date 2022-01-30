import { Fragment, useState } from "react";
import ReactPlayer from "react-player";
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
				<ReactPlayer url={config.video} muted={isMute} loop playing={true} />
			) : (
				<Fragment>
					<img
						src={btnLixi}
						className="btnLixi"
						alt="btnLixi"
						onClick={onOpenLixi}
					/>
					<ReactPlayer
						loop
						playing={true}
						url={config.audio}
						muted={isMute}
						style={{ display: "none" }}
					/>
				</Fragment>
			)}
		</div>
	);
};

export default Home;
