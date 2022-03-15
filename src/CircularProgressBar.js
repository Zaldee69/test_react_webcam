import { useEffect } from "react";
import "./Circular.css";

const CircularProgressBar = ({ percent, error }) => {
  useEffect(() => {
    const progressCircle = document.querySelector(".progress-circle");
    const horizontalRadius = progressCircle?.rx.baseVal.value || null;
    const verticalRadius = progressCircle?.ry.baseVal.value || null;
    const circumference =
      (verticalRadius + horizontalRadius - 60) * 2.4 * Math.PI;

    // const setProgress = (num) => {
    //   //check if progressCircle !== null, then we will change progressCircle style
    //   progressCircle === null
    //     ? ""
    //     : (progressCircle.style.strokeDashoffset =
    //         circumference - (num / 100) * circumference);
    // };
    //   setProgress(percent);
  }, []);

  //   useEffect(() => {
  //     const track = document.querySelector(".track");
  //     //check if num != 0, track != null, and status !== "Look Straight", then we will change track stroke colors
  //     error ? (track.style.stroke = "#DE350B") : (track.style.stroke = "#fff");
  //   }, [error]);

  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 140 160"
      className="percent svg"
    >
      <ellipse id="track" className="track" cx="50%" cy="50%" rx="68" ry="68" />
      <ellipse
        id="circle"
        className="progress-circle"
        cx="50%"
        cy="50%"
        rx="68"
        ry="68"
      />
    </svg>
  );
};

export default CircularProgressBar;
