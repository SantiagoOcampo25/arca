import React from "react";
import '../assets/css/index.scss'
import '../assets/css/main.scss'

function Services() {
  return (
    <a name="Servicios">
            <article className="services">
                <span>
                    <h2>Servicios</h2>
                    <hr></hr>
                </span>
                <section className="cards-services col-cards-one">
                    <figure>
                        <img src="./assets/img/Rectangle 14.png" alt=""></img>
                    </figure>
                    <span className="text-cards">
                        <h3>Fisioterapia</h3>
                        <p>Trabajamos para reducir el dolor, mejorar el movimiento y ayudar a las personas a retomar sus actividades cotidianas. Usamos una combinación de técnicas para aliviar el dolor y mejorar la coordinación, la fuerza y la resistencia.</p>
                    </span>
                </section>
                <section className="cards-services col-cards-two">
                    <figure>
                        <img src="./assets/img/Rectangle 17.png" alt=""></img>
                    </figure>
                    <span className="text-cards">
                        <h3>Fonoaudiologia</h3>
                        <p>Dotamos a nuestros pacientes de estrategias de comunicación y le ayudamos a comprenderlas de manera útil para que las pongan en práctica durante su vida diaria.</p>
                    </span>
                </section>
                <section className="cards-services col-cards-three">
                    <figure>
                        <img src="./assets/img/Rectangle 19-1.png" alt=""></img>
                    </figure>
                    <span className="text-cards">
                        <h3>Terapia Ocupacional</h3>
                        <p>Mejoramos la capacidad del individuo para realizar las actividades básicas de cuidado personal, el trabajo productivo y las actividades de ocio. Se incluyen las actividades diarias básicas y las más complejas.</p>
                    </span>
                </section>
                <section className="cards-services col-cards-four">
                    <figure>
                        <img src="./assets/img/Rectangle 19.png" alt=""></img>
                    </figure>
                    <span className="text-cards">
                        <h3>Psicologia</h3>
                        <p>Estamos comprometidos con orientar a nuestros pacientes para mejorar su calidad de vida, creamos espacios llenos de confianza que ayudaran a sanar tu vida y ser una mejor versión de ti mismo.</p>
                    </span>
                </section>
            </article>
        </a>
  );
}

export default Services;
