import React, { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  const handlePause = () => {
    videoRef.current?.pause();
  };

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10; // Forward 10s
    }
  };

  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10; // Backward 10s
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="640"
        controls
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />

      <div className="controls">
        <button onClick={handlePlay}>▶️ Play</button>
        <button onClick={handlePause}>⏸️ Pause</button>
        <button onClick={handleForward}>⏩ Forward 10s</button>
        <button onClick={handleBackward}>⏪ Backward 10s</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
