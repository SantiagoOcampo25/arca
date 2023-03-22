import React from "react";
import '../assets/css/index.css'
import '../assets/css/main.css'

function Footer(){
    return (
      <>
        <article className="map-fun">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7952.881205782493!2d-74.05143562537465!3d4.693247982832162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ab94f8efb21%3A0x6eb6f4d3a026bd51!2sFundaci%C3%B3n%20Arc%C3%A1ngeles!5e0!3m2!1ses!2sco!4v1655860793928!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </article>
        <footer>
          <section className="cell-footer">
            <span className="head-foo">Contacto</span>
            <hr />
            <span className="body-foo">
              Dirección: Calle 106 No. 17a – 43 <br />
              Telefono: 310 6954924 <br />
              E-mail: info@arcangeles.org <br />
            </span>
          </section>
          <section className="cell-footer">
            <span className="head-foo">Accesos Rápidos</span>
            <hr />
            <span className="body-foo">
              <a href="">Inicio</a>
              <br />
              <a href="">Sobre Nosotros</a>
              <br />
              <a href="">Servicios</a>
              <br />
              <a href="">Contacto</a>
              <br />
            </span>
          </section>
          <section className="cell-footer">
            <span className="head-foo">Social</span>
            <hr />
            <span className="body-foo">
              <a href="http://facebook.com/fundacionarcangeles/" target="_blank">
                Facebook
              </a>
              <br />
              <a href="https://twitter.com/FundArcangeles" target="_blank">
                Twitter
              </a>
            </span>
          </section>
          <span className="foo">Todos los derechos reservados © 2022</span>
        </footer>
      </>
    );
}

export default Footer;
