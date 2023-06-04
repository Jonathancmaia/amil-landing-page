import "./style.css";

//Images import
import analia from "../../assets/images/analia-franco.png";
import metropolitano from "../../assets/images/metropolitano.png";
import paulistano from "../../assets/images/paulistano.png"; 
import amaro from "../../assets/images/santo-amaro.png";
import mariana from "../../assets/images/mariana.png";
import carlos from "../../assets/images/carlos-chagas.png";
import mogi from "../../assets/images/mogi.png";
import aruja from "../../assets/images/aruja.png";

const Section5 = () => {
    return (
        <section className="section5" id="section5">
            <h1>
                Hospitais certificados, com qualidade e tradição de quem é referência
            </h1>
            <h3>
                São Paulo
            </h3>
            <div className="hospitals-handler">
                <div className="item">
                    <img src={analia}/>
                    <h3>Hospital Vitória Anália Franco</h3>
                </div>
                <div className="item">
                    <img src={metropolitano}/>
                    <h3>Hospital Metropolitano</h3>
                </div>
                <div className="item">
                    <img src={paulistano}/>
                    <h3>Hospital Paulistano</h3>
                </div>
                <div className="item">
                    <img src={amaro}/>
                    <h3>Hospital Luz Santo Amaro</h3>
                </div>
                <div className="item">
                    <img src={mariana}/>
                    <h3>Hospital Luz Vila Mariana</h3>
                </div>
            </div>

            <h3>
                Guarulhos, Arujá e Mogi das Cruzes
            </h3>
            <div className="hospitals-handler">
                <div className="item">
                    <img src={carlos}/>
                    <h3>Hospital Carlos Chagas</h3>
                    <small>Guarulhos</small>
                </div>
                <div className="item">
                    <img src={mogi}/>
                    <h3>Hospital Ipiranga - Mogi</h3>
                    <small>Mogi das Cruzes</small>
                </div>
                <div className="item">
                    <img src={aruja}/>
                    <h3>Hospital Ipiranga - Arujá</h3>
                    <small>Arujá</small>
                </div>
            </div>
        </section>
    );
}

export default Section5;