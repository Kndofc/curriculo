import icon from '../header/assets/img-icon.jpg';
import Curriculo from './assets/Enzo.pdf'
import './about.css';

export default function About() {
    return (
        <section class="page-light" id="about">
            <h2 class="title-page">Sobre mim</h2>
            <div class="about-section">
                <div class="left-img">
                    <img src={icon} class="img-about" alt="icon"></img>
                </div>
                <div class="right-text">
                    <div class="texto-about">
                        <h3>Quem sou eu?</h3>
                        <p>
                        Eu sou de São Paulo, mas curso Ciência da Computação atualmente na UTFPR em Medianeira, conto com algumas conquistas individuais e o mais relevante até hoje além de ser medalhista de ouro nacionalmente é ter participado de uma competição internacional na Índia. Para saber mais sobre minhas habilidades e minha carreira clique e faça o download do meu curriculo.
                        </p>
                        <a href={Curriculo} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Currículo</a>
                    </div>
                </div>
            </div>
        </section>
    );
}