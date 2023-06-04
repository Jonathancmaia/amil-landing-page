import './style.css';
import anos45 from "../../assets/images/45-anos.png";

const Section1 = () => {
    return (
        <section className="section1">
            <p className="white-font fs-1-5 line-height text1">
                NOVO PLANO AMIL
            </p>
            <p className="white-font individ-handler">
                INDIVID
                <span className="uau-handler yellow-font">
                    <span>
                        U
                    </span>
                    <span>
                        A
                    </span>
                    <span>
                        U   
                    </span>
                    <span>
                        !
                    </span>
                </span>
            </p>

            <p className="yellow-font fs-1-5">
                Amil Fácil F110 SP
            </p>

            <div className='white-font text-container-2'>
                <p>É fácil.</p>
                <p>É pra você.</p>
                <p>É pra sua família.</p>
                <p className="yellow-font">É tipo: Uau!</p>
            </div>

            <div className="price-cardAnd45anos-handler">
                <div className="price-card">
                    <p>Na faixa de 54 a 58 anos por</p>
                    <p>R$ 837<span>,90*</span></p>
                    <p>por pessoa por mês</p>
                </div>
                <img src={anos45} />
            </div>

            <small>
            *Preço válido de 01/05/2023 a 31/07/2023 para o plano Amil Fácil F110 QP Copart, Familiar, acomodação em quarto privativo, com coparticipação, na faixa etária de 54 a 58 anos. Para consultar outros valores, procure o seu corretor.
            </small>
        </section>
    )
}

export default Section1;