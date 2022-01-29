import { useEffect, useRef, useState } from "react";
import "../../App.css";
import btnLixi from "../../images/btn-lixi.png";
import icSound from "../../images/ic_sound.png";
import icMuteSound from "../../images/ic_sound_mute.png";
const linkDefault = 'https://www.youtube.com/embed/78Vk-0qsRIE?autoplay=1&loop=1&controls=0'
const Home = () => {
  const [isLiXi, setIsLiXi] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [link, setLink] = useState(linkDefault);
  const onOpenLixi = () => {
    setIsLiXi(!isLiXi);
  };
  const onOffMMute = () => {
    if(isLiXi) {
      setLink(linkDefault + `&mute=${!isMute === true ? '1' : '0'}`)
    }
    setIsMute(!isMute);
  };

  // const onRef = useRef(null);

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

      {isLiXi && (
        <div>
          <iframe
            // ref={onRef}
            // width="560"
            // height="315"
            src={link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}

      {!isLiXi && (
        <img
          src={btnLixi}
          className="btnLixi"
          alt="btnLixi"
          onClick={onOpenLixi}
        />
      )}
    </div>
  );
};

export default Home;
