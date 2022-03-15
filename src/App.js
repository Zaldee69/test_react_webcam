import React, { useState, useRef, useEffect } from "react";
import Overlay from "./Overlay";
import Webcam from "react-webcam";
import CircularProgressBar from "./CircularProgressBar";
function App() {
  const videoConstraints = {
    width: 680,
    height: 1320,
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);

  const wdth = useRef(null);

  // useEffect(() => {
  //   const overlay = document.getElementById("overlay");
  //   const overlayCircle = document.getElementById("overlay-circle");
  //   const circle = document.getElementById("circle");
  //   const track = document.getElementById("track");
  //   const webcam = document.getElementById("webcam");

  //   overlay.style.height = webcam.clientHeight;
  //   console.log(webcam.clientHeight);

  //   if (webcam.clientHeight < 210) {
  //     overlay.style.height = webcam.clientHeight;
  //     overlayCircle.setAttribute("rx", webcam.clientHeight / 4);
  //     overlayCircle.setAttribute("ry", webcam.clientWidth / 4);
  //     circle.setAttribute("rx", webcam.clientHeight / 4);
  //     circle.setAttribute("ry", webcam.clientWidth / 4 - 15);
  //     track.setAttribute("rx", webcam.clientHeight / 4);
  //     track.setAttribute("ry", webcam.clientWidth / 4 - 15);
  //   } else {
  //     overlay.style.height = webcam.clientHeight;
  //     overlayCircle.setAttribute("rx", webcam.clientHeight / 4 - 10);
  //     overlayCircle.setAttribute("ry", webcam.clientWidth / 4 - 10);
  //     circle.setAttribute("rx", webcam.clientHeight / 4 - 10);
  //     circle.setAttribute("ry", webcam.clientWidth / 4 - 25);
  //     track.setAttribute("rx", webcam.clientHeight / 4 - 10);
  //     track.setAttribute("ry", webcam.clientWidth / 4 - 25);
  //   }
  // }, []);

  return (
    <div className="container">
      <div
        style={{
          width: "80%",
          height: "100%",
          position: "relative",
          margin: "50px auto",
        }}
      >
        <Webcam
          audio={false}
          id="webcam"
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />

        {/* <Overlay /> */}
        <div className="circle-container">
          <CircularProgressBar />
        </div>
      </div>
    </div>
    // <div>
    //   <Camera />
    // </div>
  );
}

export default App;
