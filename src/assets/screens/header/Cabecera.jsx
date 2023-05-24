import React from "react";
import { Link } from "react-router-dom";
import "../../style/GlobalStyles.css";
import logoImage from "../../img/LogoNavbar.jpg";
import backImage from "../../img/backToFuture.png";

function Cabecera({ direcion }) {
    return (
        <div className="navbar">
            <div className="logo">
                {/* <img src={logoImage} alt="" /> */}
            </div>
            <div className="volver">
                <Link to={direcion}>
                    <img src={backImage} alt="" />
                </Link>
            </div>
        </div>
    );
}

export default Cabecera;