import React from "react";
import '../assets/css/index.scss'
import '../assets/css/main.scss'

function Contact(){
    return (
      <a name="Contacto">
        <article className="contacto">
          <span>
            <h2>Contacto</h2>
            <hr />
          </span>
          <section className="redes">
            <div className="con-red-s">
              <figure><img src="./assets/img/facebook 1.svg" alt="" /></figure>
            </div>
            <div className="name-red-s">
              <a href="#">Arcángeles Fundación</a>
            </div>
            <div className="con-red-s">
              <figure><img src="./assets/img/gorjeo 1.svg" alt="" /></figure>
            </div>
            <div className="name-red-s">
              <a href="#">@FundArcangeles</a>
            </div>
            <div className="con-red-s">
              <figure><img src="./assets/img/ubicacion 1.svg" alt="" /></figure>
            </div>
            <div className="name-red-s">
              <a href="#">Calle 106 No. 17a – 43</a>
            </div>
          </section>
          <form action="">
            <input type="text" name="" id="name-user" placeholder="Nombre" />
            <input type="email" name="" id="email-user" placeholder="Correo Electrónico" />
            <textarea name="" id="message-user" cols="30" rows="10">Mensaje</textarea>
            <input type="submit" value="Envíar mensaje" id="btn-contacto" />
          </form>
        </article>
      </a>
    );
}

export default Contact;
