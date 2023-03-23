import React from "react";
import '../assets/css/index.scss'
import '../assets/css/main.scss'

function AboutUs() {
  return (
    <a name="Nosotros">
            <article className="con-about">
                <span>
                    <h2>Sobre Nosotros</h2>
                    <hr></hr>
                </span>
                <section>
                    <h3>Misión</h3>
                    <p>Reconocemos la diversidad y empoderamos a las personas con discapacidad, a través de la rehabilitación y el deporte, para promover la inclusión económica, social y laboral.</p>
                </section>
                <section className="s2">
                    <h3>Visión</h3>
                    <p>Trasformar los paradigmas alrededor de la discapacidad, aportando a la construcción de un país más inclusivo para las futuras generaciones.</p>
                </section>
            </article>
        </a>
  );
}

export default AboutUs;
