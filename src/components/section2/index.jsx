import './style.css';
import background from '../../assets/images/section-2-background.png';

const Section2 = () => {
    return (
        <section className="section2" id="section2">
            <img src={background} />
            <div>
                <p className="title">
                    Na Amil, sua família tem muito mais vantagens
                </p>
                <p>
                    A Amil traz uma grande novidade: <span className="strong-text">o plano individual e familiar Amil Fácil F110 SP.</span>
                </p>
                <p>
                    Com ele, você e sua família têm acesso a hospitais e laboratórios de qualidade, ambulatórios, telemedicina, desconto em farmácias e agendamento de consultas via aplicativo - tudo isso com a qualidade que só a Amil oferece.
                </p>
                <p className="strong-text">
                    Comece a cuidar hoje da saúde da sua família e conte com a experiência de quem sempre esteve ao seu lado!
                </p>
            </div>
        </section>
    );
}

export default Section2;