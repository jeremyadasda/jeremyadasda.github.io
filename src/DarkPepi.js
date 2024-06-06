import React from 'react';
import Header from './Header';
import Songsita from './Songsita';
import { Link } from 'react-router-dom';
import RowColWrapper from './RowColWrapper';
import Carrusel from './Carrusel';

function DarkPepi(){
    const linkSonga1 = "https://www.dropbox.com/scl/fi/oomlogsh9okdt6cb7ligd/yexdxd.mp3?rlkey=q87985vner4eor1nlnhprmckz&st=uadit1aj&raw=1";
    const linkSonga2 = "https://www.dropbox.com/scl/fi/p1zm8vghd9gqktxi0ymy9/uuuu.mp3?rlkey=3ot2skcmiqj2o4crb92yn4vvj&raw=1";
    const linkSonga3 = "https://www.dropbox.com/scl/fi/oq8id76ifk7ggpulbemea/23123123123123123123123123123123156565656.mp3?rlkey=dr1jlsmswdfb617itq4z7kcqb&raw=1";
    const linkez = <Link to="https://ezra666.bandcamp.com/album/ezra-xd" target='_blank'>ezra album</Link>;
return(
    
    <div className="container">
        <Header/>
        <Songsita src={linkSonga1} name="never meant de american f00tbal remix pepito xd"/>
    
        <Songsita src={linkSonga2} name="uuu full version darkpepito onli" desc="esta cancion esta presente en" link={linkez}/>
        
        <Songsita src={linkSonga3} name="ll full" desc="en realidad este tema se llamo : 23123123123123123123123123123123156565656,  en el album ezra se llama ll" link={linkez}/>

        <RowColWrapper content={<img src='yum.svg' className="img-fluid" id="yum" alt='yum'/>}/>
        <RowColWrapper content={<Carrusel/>}/>
        
  </div>
);
}
export default DarkPepi;