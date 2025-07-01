import { useRef } from 'react';

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
    <div className='relative w-full h-screen overflow-hidden'>
      <video
       className='absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-25'
        controls={false}
        muted
        autoPlay
        loop
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />

      {/* <div className="controls flex gap-2">
        <button onClick={handlePlay}>▶️ Play</button>
        <button onClick={handlePause}>⏸️ Pause</button>
        <button onClick={handleForward}>⏩ Forward 10s</button>
        <button onClick={handleBackward}>⏪ Backward 10s</button>
      </div> */}
        {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-2">
        <h1 className="text-4xl font-bold">Welcome to SyncFlix</h1>
        <p className="text-lg mt-4">Stream together. Stay in sync.</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
