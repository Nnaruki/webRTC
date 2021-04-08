import React, { useEffect,useRef } from 'react';

const VideoLocal = () => {
    const videoRef = useRef(null);
    const currentVideoRef = videoRef.current;

    useEffect(() => {
        const getMedia = async() => {
            if (currentVideoRef === null) return;
            const constraints = { audio: true, video: true };
          
            try {
              const mediaStream = await navigator.mediaDevices.getUserMedia(
                  constraints
              );
              /* ストリームを使用 */
            } catch(err) {
              /* エラーを処理 */
              console.error(err);
            }
          };
          
          getMedia();    
    }, [currentVideoRef]);
    return <></>;
};

export default VideoLocal;