import React, { useRef, useState, useEffect } from 'react';

export default function CustomVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        setProgress(videoRef.current.currentTime);
      }
    }, 500); // update progress every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <video
        className='rounded-xl absolute top-0 left-0 w-full h-full object-cover z-[-10]'
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        width="640"
        onLoadedMetadata={() => {
          if (videoRef.current) {
            setProgress(videoRef.current.currentTime);
          }
        }}
        controls={false} // hide default controls
      />

      <input 
        
        type="range"
        min={0}
        max={videoRef.current?.duration || 100}
        value={progress}
        onChange={handleSeek}
        className="w-full my-2 h-4 border-green-400"
      />

      <div className="flex justify-center gap-4">
        <button onClick={() => videoRef.current?.play()}>▶️ Play</button>
        <button onClick={() => videoRef.current?.pause()}>⏸️ Pause</button>
      </div>
    </div>
  );
}
