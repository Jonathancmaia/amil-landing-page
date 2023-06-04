import { useState } from 'react';
import './style.css';
import map from '../../assets/images/map.png';
import mapmobile from '../../assets/images/mapmobile.png';

const Section4 = () => {
    
    const [width, setWidth] = useState(window.innerWidth);

    addEventListener("resize", () => {setWidth(window.innerWidth)});

    return (
        <section className="section4" id="section4">
            <h1>
                Abrangência em 4 municípios do estado de São Paulo
            </h1>
            <img src={width >= 600 ? map : mapmobile}/>
        </section>
    );
}

export default Section4;