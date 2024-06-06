import React from 'react';
import AudioPlayer from './AudioPlayer';

function Songsita({src, name, desc, link}){
    return(
    <div className="row justify-content-center borde firs">
        <div className="col-md-12 centered-column">
        <h2>{name}</h2>
        <p>{desc} {link}</p>
        
        </div> 
        <div className="col-md-2"></div>
        <div className="col-md-6 centered-column">
        <AudioPlayer src={src} type="audio/mpeg" />
        </div>
        <div className="col-md-2"></div>
    </div>
    );
}
export default Songsita;