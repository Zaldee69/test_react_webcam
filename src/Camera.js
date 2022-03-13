import { useRef, useCallback, useEffect, useState } from "react";
import Webcam from "react-webcam";
import "./Camera.css";
import Overlay from "./Overlay";
import CircularProgressBar from "./CircularProgressBar";

const Camera = ({}) => {
  // States

  const videoConstraints = {
    width: 680,
    height: 1320,
    facingMode: "user",
  };

  const webcamRef = useRef(null);

  const wdth = useRef(null);

  return (
    <>
      <div style={{ backgroundColor: "#fff" }} className="camera">
        <div className="camera__wrapper">
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                borderRadius: "4px",
                width: "100%",
              }}
            >
              <Webcam
                audio={false}
                id="webcam"
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                style={{
                  width: "90%",
                  height: "100%",
                  objectFit: "cover",
                  marginTop: "30px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 100,
                  width: "100%",
                }}
              >
                <Overlay />
                <div className="circle-container">
                  <CircularProgressBar />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="action">
          <span>Hadap ke kiri</span>
          <small>Mohon jangan bergerak selama proses pengambilan wajah</small>
        </div>
      </div>
    </>
  );
};

export default Camera;
