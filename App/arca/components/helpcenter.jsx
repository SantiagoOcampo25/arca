import React from "react";
import { useState } from 'react';
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/helpCenter.scss";
import HelpCenterBody from "./helpcenterbody";

function HelpCenter() {
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
      <HelpCenterBody />
      <div className="footer-help-center">
        <h4>¿Aun necesitas ayuda?</h4>
        <p>Envia un mensajes via email.</p>
        <Link to="" >Contactanos</Link>
      </div>
    </div>
  );
}

export default HelpCenter;
