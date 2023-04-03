import React from "react";
import { Link } from "react-router-dom";

function Itemssidebar(props){
    const { to, imgSrc, alt, name} = props;
    return(
    <>
    {to ?(
        <Link className="item-sidebar item-active" to={to}>
          <div className="color-item color-item-active"></div>
          <div className="con-ico-item">
            <img src={imgSrc} alt={alt} />
          </div>
          <div className="name-item">{name}</div>
        </Link>
    ):(
        <a className="item-sidebar section-item">
            <div className="color-item"></div>
            <div className="con-ico-item"></div>
            <div className="name-item">{name}</div>
        </a>
    )}
    </>
    );
}
export default Itemssidebar;

