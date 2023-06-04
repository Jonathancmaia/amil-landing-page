import "./style.css";

//images imports
import youtube from "../../assets/images/youtube.png";
import face from "../../assets/images/face.png";
import insta from "../../assets/images/insta.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import tiktok from "../../assets/images/tiktok.png";
import pint from "../../assets/images/pint.png";

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div>
                <a href="#">
                    <img src={youtube} />
                </a>
                <a href="#">
                    <img src={face} />
                </a>
                <a href="#">
                    <img src={insta} />
                </a>
                <a href="#">
                    <img src={linkedin} />
                </a>
                <a href="#">
                    <img src={twitter} />
                </a>
                <a href="#">
                    <img src={tiktok} />
                </a>
                <a href="#">
                    <img src={pint} />
                </a>
            </div>
            <p>
                Amil Assistência Médica Internacional S/A
            </p>
            <p>
                CNPJ 29.309.127/0001-79
            </p>
            <p>
                © Copyright 2007-2019 Todos os direitos reservados.
            </p>
            <p>
                <a href="#">Política de Privacidade</a>
                |
                <a href="#">Comunicado de Privacidade</a>
                |
                <a href="#">Política de Cookies</a>
            </p>
        </footer>
    );
};

export default Footer;