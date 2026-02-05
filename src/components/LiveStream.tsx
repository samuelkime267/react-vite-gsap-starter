// components/LiveStream.tsx
import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface LiveStreamProps {
  streamUrl: string; // e.g. "http://localhost:8080/hls/test.m3u8"
}

const LiveStream = ({ streamUrl }: LiveStreamProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current?.play();
      });

      return () => {
        hls.destroy();
      };
    } else {
      // Safari / browsers with native HLS
      videoRef.current.src = streamUrl;
      videoRef.current.play();
    }
  }, [streamUrl]);

  return <video ref={videoRef} controls autoPlay style={{ width: "100%", height: "auto" }} />;
};

export default LiveStream;
