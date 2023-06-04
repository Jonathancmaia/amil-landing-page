import "./style.css";
import Form from './form';
import phone from "../../assets/images/phone.svg";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div>
                <h1>
                    Contrate agora o plano perfeito para cuidar da saúde da sua família
                </h1>
                <p className="yellow-text">
                É só ligar ou preencher os seus dados ao lado que um corretor entrará em contato com você.
                </p>
                <p className="plantao">
                    Plantão de vendas:
                </p>
                <div className="phoneNumber yellow-text">
                    <div>
                        Capitais e regiões metropolitanas:
                    </div>
                    <div>
                        <img src={phone}/>
                        3004.4596
                    </div>
                </div>
                <div className="phoneNumber yellow-text">
                    <div>
                        Demais localidades:
                    </div>
                    <div>
                        <img src={phone}/>
                        0800.208.1006
                    </div>
                </div>
            </div>
            <div>
                <Form />
            </div>
        </section>
    );
};

export default Contact;