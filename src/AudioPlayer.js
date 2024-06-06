import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = ({src}) => {
  return (
    <ReactAudioPlayer
      src={src}
      controls
      controlsList="nodownload"
      style={{backgroundColor:'red', width:'100%'}}
    />
  );
};

export default AudioPlayer;
