import './certificates.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import quanta from "./assets/quanta.jpg"
import iniciante from "./assets/iniciante.png"
import verso from "./assets/verso.png"
import blockchain from "./assets/blockchain.png"
import circular from "./assets/circular.png"
import diploma from "./assets/diploma.png"
import empreender from "./assets/empreender.png"
import financas from "./assets/financas.png"
import foco from "./assets/foco.png"
import habitos from "./assets/habitos.png"
import industria from "./assets/industria.png"

export default function Certificates() {
    var settings = {
        speed: 500,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2200,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
    };

    return (
        <section class="page-section" id="certificates">
            <h3 class="title-page">Certificados</h3>
            <div class="container-owl-certificates">
            <Slider {...settings}>
                <div class="item">
                    <div class="img-item">
                        <img src={quanta} alt="Certificado QUANTA"></img>
                    </div>
                    <h3><span>Certificado Competição internacional</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={iniciante} alt="Certificado Iniciante em Programação"></img>
                    </div>
                    <h3><span>Certificado Iniciante em Programação</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={verso} alt="Certificado Iniciante em Programação"></img>
                    </div>
                    <h3><span>Certificado Iniciante em Programação (verso)</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={foco} alt="Certificado Foco"></img>
                    </div>
                    <h3><span>Certificado Foco</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={habitos} alt="Certificado Hábitos"></img>
                    </div>
                    <h3><span>Certificado Hábitos</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={diploma} alt="Diploma Ensino Médio"></img>
                    </div>
                    <h3><span>Diploma Ensino Médior</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={blockchain} alt="Certificado Desvendando a Blockchain"></img>
                    </div>
                    <h3><span>Desvendando a Blockchain</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={circular} alt="Certificado Economia Circular"></img>
                    </div>
                    <h3><span>Certificado Economia Circular</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={empreender} alt="Certificado Empreender"></img>
                    </div>
                    <h3><span>Certificado Empreender</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={financas} alt="Certificado Finanças Pessoais"></img>
                    </div>
                    <h3><span>Certificado Finanças Pessoais</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={industria} alt="Certificado Desvendando a Industria 4.0"></img>
                    </div>
                    <h3><span>Certificado Desvendando a Industria 4.0</span></h3>
                </div>
            </Slider>
            </div>
        </section>
    );
}