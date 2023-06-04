import "./style.css";
import home from "../../assets/images/icon1.png";
import cell from "../../assets/images/icon2.png";
import money from "../../assets/images/icon3.png";
import hospital from "../../assets/images/icon4.png";
import device from "../../assets/images/icon5.png";
import atendant from "../../assets/images/icon6.png";
import h24 from "../../assets/images/icon7.png";
import stethoscope from "../../assets/images/icon8.png";

const Section3 = () => {
    return (
        <section className="section3" id="section3">
            <h1>
                Só Amil tem benefício
                <br/>
                para toda a família
            </h1>
            <div className="icons-handler">
                <div className="card-item">
                    <img src={home}/>
                    <p>Rede própria e exclusiva</p>
                    <small>
                        com centros médicos e hospitais de referência
                    </small>
                </div>
                <div className="card-item">
                    <img src={cell}/>
                    <p>
                        Telemedicina Amil
                    </p>
                    <small>
                    para urgências e consultas agendadas
                    </small>
                </div>
                <div className="card-item">
                    <img src={money}/>
                    <p>
                    Desconto em farmácias
                    </p>
                </div>
                <div className="card-item">
                    <img src={hospital}/>
                    <p>
                        Ambulatórios
                    </p>
                </div>
                <div className="card-item">
                    <img src={device}/>
                    <p>
                        Agendamento online pelo site e app
                    </p>
                </div>
                <div className="card-item">
                    <img src={atendant}/>
                    <p>
                    Agente de Saúde Virtual
                    </p>
                </div>
                <div className="card-item">
                    <img src={h24}/>
                    <p>
                    Unidades de Pronto Atendimento
                    </p>
                    <small>
                        e Pronto-socorro 24 horas
                    </small>
                </div>
                <div className="card-item">
                    <img src={stethoscope}/>
                    <p>
                    Programas de saúde exclusivos da Amil
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Section3;