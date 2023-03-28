import React from "react";
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/helpCenter.scss";

function HelpCenter(){
  const [itemSelected, setItemSelected] = useState(false);
  const [lastItemSelected, setLastItemSelected] = useState("");
  const [sectWithOut, setSectWithOut] = useState(true);
  const [lastSectSelected, setLastSectSelected] = useState("");

  function selectItem(classItemS, numberClass) {
    if (!itemSelected) {
      let item = document.querySelector(classItemS);
      item.classList.add("item-help-selected");
      setItemSelected(true);
      setLastItemSelected(classItemS);
      showitemsCenterHelp(numberClass);
    } else {
      let lastItem = document.querySelector(lastItemSelected);
      lastItem.classList.remove("item-help-selected");
      showitemsCenterHelp(numberClass);

      let item = document.querySelector(classItemS);
      item.classList.add("item-help-selected");
      setLastItemSelected(classItemS);
    }
  }

  function showitemsCenterHelp(numberClass) {
    if (sectWithOut) {
      setSectWithOut(false);
      document.querySelector(".con-sect-without").style.display = "none";

      let sectClass = document.querySelector(`.acordion-sect:nth-child(${numberClass})`);
      setLastSectSelected(sectClass);
      sectClass.classList.add("acordion-sect-selected");
    } else {
      lastSectSelected.classList.remove("acordion-sect-selected");

      let sectClass = document.querySelector(`.acordion-sect:nth-child(${numberClass})`);
      setLastSectSelected(sectClass);
      sectClass.classList.add("acordion-sect-selected");
    }
  }
  return (
    <div className="con-help-center-v">
      <div className="aside-help-center">
        <div className="info-help">
            <h3>Modulo de ayuda</h3>
            <p>Encuentra las respuestas a tus dudas mas frecuentes.</p>
          </div>
          <div className="con-inpt">
            <input type="text" className="form-control" id="floatingPassword" placeholder="Buscar" />
            <img src="../assets/img/icons/busqueda.svg" alt="" />
          </div>
          <div className="con-items">
     <div className="item-help" onClick={() => selectItem('.con-items :nth-child(1)', 1)}>
        Ingresar a Arca
        <img src="../assets/img/icons/angulo-doble-pequeno-derecho 1.svg" alt="" />
      </div>
      <div className="item-help" onClick={() => selectItem('.con-items :nth-child(2)', 2)}>
        ¿Qué puedo hacer?
        <img src="../assets/img/icons/angulo-doble-pequeno-derecho 1.svg" alt="" />
      </div>
      <div className="item-help" onClick={() => selectItem('.con-items :nth-child(3)', 3)}>
    Fundación Arcangeles
        <img src="../assets/img/icons/angulo-doble-pequeno-derecho 1.svg" alt="" />
      </div>
      <div className="item-help" onClick={() => selectItem('.con-items :nth-child(4)', 4)}>
        Modulo de PQRSF
        <img src="../assets/img/icons/angulo-doble-pequeno-derecho 1.svg" alt="" />
      </div>
    </div>    
    </div>
    <div className="body-help-center">
      <div className="accordion acordion-sect" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Mi usuario esta deshabilitado
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Lo sentimos mucho.</p>
              <p>1. Debes comunicarte con el equipo de soporte Arca. </p>
              <p>Escribe un mensaje al correo <a href="mailto:soporte@arca.com">soporte@arca.com</a> .En breve te ayudaremos.</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Registrarme
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>1. Oprime “Registrate”. Esto te llevará al módulo de registro.</p>
              <p>2. Digita los datos solicitados cuidadosamente.</p>
              <p>3. Oprime el botón “Registrarme”.</p>
              <p>4. Inicia sesión.</p>
              <strong>Recuerda que en Arca tratamos tus datos cuidadosamente.</strong>
            </div>
          </div>
        </div>
        <hr />
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Olvide mi clave
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>1. Al momento de iniciar sesión, oprime “¿Olvidaste tu contraseña?”.</p>
              <p>2. En el módulo de recuperación de contraseñas, ingresa el correo electrónico que digitaste en el registro, te llegará un código de acceso. Oprime aceptar.</p>
              <p>3. Cuando llegue tu código de acceso, digitelo en el campo indicado. Oprime aceptar.</p>
              <p>4. Si el código es el correcto, digite su nueva contraseña. Oprima aceptar.</p>
              <p>5. ¡Listo! Ya puedes iniciar sesión y disfrutar de las funcionalidades de Arca.</p>
            </div>
          </div>
        </div>
      </div>  
      <div className="accordion acordion-sect" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Agendar citas medicas
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>En Arca puedes agendar citas médicas con tu doctor favorito, cuando quieras y a la hora que quieras.</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Visualizar tus diagnosticos medicos
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Lo que tu doctor observe en tus citas medicas, se registrara y podras observarlo cuando quieras.</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Realizar PQRSF
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Porque tu opinion importa, en Arca podras realizar PQRSF para que tengamos en cuenta lo que piensas.</p>
            </div>
          </div>
        </div>
      </div>  
      <div className="accordion acordion-sect" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              ¿Qué hace?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Promovemos la inclusión a partir de la obtención de condiciones óptimas de salud que permitan el desarrollo de la independencia funcional, a través de programas de habilitación y/o rehabilitación dirigidos por un equipo interdisciplinario especializado, que busca recuperar y desarrollar el mayor potencial funcional de los pacientes, proporcionando las herramientas necesarias para su reincorporación a la sociedad, haciendo partícipe a la familia en el proceso brindando un servicio humanizado.</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Contacto
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Nos puedes encontrar en <strong>Calle 106 No. 17a</strong></p>
              <p>Nos puedes contactar al correo <a href="mailto:info@arcangeles.org">info@arcangeles.org</a></p>
            </div>
          </div>
        </div>
        <hr />
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              ¿Puedo realizar mis citas medicas desde la fundacion?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Si, si prefieres realizar tus citas presencialmente, en la Fundación Arcangeles tenemos un equipo que puede ayudarle con el agendamiento de citas medicas.</p>
            </div>
          </div>
        </div>
      </div>  
      <div className="accordion acordion-sect" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Realizar PQRSF
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>1. Ingresar al modulo de PQRSF.</p>
              <p>2. Ingresa cuidadosamente los datos solicitados.</p>
              <p>3. Oprime el boton enviar.</p>
              <p>4. ¡Listo! Espera el correo del equipo de soporte Arca</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Seguimiento de mi PQRSF
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Puedes revisar el estado de tu PQRSF en el modulo de PQRSF.</p>
              <p>La respuesta a tu PQRSF llegara a tu correo, aconsejamos revisar constantemente</p>
              <i>Recuerda, el tiempo maximo para que obtengas una respuesta de nuestra parte son 15 dias habiles.</i>
            </div>
          </div>
        </div>
        <hr />
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              ¿Como se si respondieron mi PQRSF?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>1. Revisar en el modulo de PQRSF, digitando tu número de radicación. Aparecera el estado de tu PQRSF en pantalla.</p>
              <i>En proceso: Tu PQRSF sigue en espera de ser contestada.</i> <br />
              <i>Respondida: Tu PQRSF ya fue respondida por el equipo de soporte Arca. Revisa tu correo.</i>
            </div>
          </div>
        </div>
      </div>  
      <div className="con-sect-without">
        Bienvenido al modulo de ayuda, donde encontraras las respuestas a tus preguntas. <br />
        Pulsa el tema que desees para empezar.
      </div>
    </div>
    <div className="footer-help-center">
      <h4>¿Aun necesitas ayuda?</h4>
      <p>Envia un mensajes via email.</p>
      <a href>Contactanos</a>
    </div>
  </div>
  );
}

export default HelpCenter;
