import Carousel from 'react-bootstrap/Carousel'; 
import ImageLinks from './Imagenes';


function Carrusel(){
    
    return(
        <Carousel>
            {ImageLinks.map((src, index)=>
            <Carousel.Item >
                
                <img src={src} alt={index}/>
                
            </Carousel.Item>
            )}
        </Carousel>
    );
}

export default Carrusel;