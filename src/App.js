import "./App.css";
import video from "./video.mp4";
import video2 from "./video2.mp4";
import { useRef } from "react";
function App() {
  const videoRef = useRef([]);

  const makeFullScreen = (i) => {
    videoRef.current[i].requestFullscreen();
    if (videoRef.current[i].paused) {
      videoRef.current[i].play();
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="carousel">
          <div className="item">
            <video
              src={video}
              ref={(el) => (videoRef.current[0] = el)}
              width="100%"
              height="100%"
              controls={false}
              loop
              autoPlay
              muted
              playsInline
              preload="metadata"
              onClick={() => makeFullScreen(0)}
            />
          </div>
          <div className="item">
            <video
              src={video2}
              ref={(el) => (videoRef.current[1] = el)}
              width="100%"
              height="100%"
              controls={false}
              loop
              playsInline
              autoPlay
              muted
              onClick={() => makeFullScreen(1)}
            />
          </div>
          <div className="item">
            <video
              src={video}
              ref={(el) => (videoRef.current[2] = el)}
              width="100%"
              height="100%"
              controls={false}
              loop
              playsInline
              autoPlay
              muted
              onClick={() => makeFullScreen(2)}
            />
          </div>
          <div className="item">
            <video
              src={video2}
              ref={(el) => (videoRef.current[3] = el)}
              width="100%"
              height="100%"
              controls={false}
              loop
              playsInline
              autoPlay
              muted
              onClick={() => makeFullScreen(3)}
            />
          </div>
          <div className="item">
            <video
              src={video}
              ref={(el) => (videoRef.current[4] = el)}
              width="100%"
              height="100%"
              controls={false}
              loop
              playsInline
              autoPlay
              muted
              onClick={() => makeFullScreen(4)}
            />
          </div>
          <div className="item">
            <video
              src={video2}
              ref={(el) => (videoRef.current[5] = el)}
              width="100%"
              height="100%"
              controls={false}
              loop
              playsInline
              autoPlay
              muted
              onClick={() => makeFullScreen(5)}
            />
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "1.5rem" }}>
        <div className="carousel2">
          <div className="item">
            <video
              src={video}
              ref={(el) => (videoRef.current[10] = el)}
              width="100%"
              height="100%"
              controls={false}
              loop
              playsInline
              autoPlay
              muted
              onClick={() => makeFullScreen(10)}
            />
          </div>
          <div className="item">
            <video
              src={video2}
              ref={(el) => (videoRef.current[11] = el)}
              width="100%"
              height="100%"
              controls={false}
              loop
              playsInline
              autoPlay
              muted
              onClick={() => makeFullScreen(11)}
            />
          </div>
          <div className="item">
            <video
              src={video}
              ref={(el) => (videoRef.current[12] = el)}
              width="100%"
              height="100%"
              controls={false}
              loop
              playsInline
              autoPlay
              muted
              onClick={() => makeFullScreen(12)}
            />
          </div>
          <div className="item">
            <video
              src={video2}
              ref={(el) => (videoRef.current[13] = el)}
              width="100%"
              height="100%"
              controls={false}
              loop
              playsInline
              autoPlay
              muted
              onClick={() => makeFullScreen(13)}
            />
          </div>
          <div className="item">
            <video
              src={video}
              ref={(el) => (videoRef.current[14] = el)}
              width="100%"
              height="100%"
              controls={false}
              loop
              playsInline
              autoPlay
              muted
              onClick={() => makeFullScreen(14)}
            />
          </div>
          <div className="item">
            <video
              src={video2}
              ref={(el) => (videoRef.current[15] = el)}
              width="100%"
              height="100%"
              controls={false}
              loop
              playsInline
              autoPlay
              muted
              onClick={() => makeFullScreen(15)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
