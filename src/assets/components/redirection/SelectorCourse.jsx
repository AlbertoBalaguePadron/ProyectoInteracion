import Cabecera from "../../screens/header/Cabecera";
import React from "react";
import { Link } from "react-router-dom";
import "../../style/GlobalStyles.css";

const SelectorCourse = ({ editarDescargar, enlace, redireccion }) => {
  let url = "";
  if (enlace === "user") {
    url = "/user/course/";
  } else if (enlace === "admin") {
    if (editarDescargar === "edit") {
      url = "/admin/course/";
    } else if (editarDescargar === "download") {
      url = "/admin/course/";
    }
  }

  return (
    <div className="container">
      <Cabecera direcion={redireccion} />

      <div className="TextCenter">Courses</div>

      <div className="bodySelector">
        <Link to={url + "1"} className="QuitarEstiloEnlace">
          <div className="elemento">
            <p>1</p>
          </div>
        </Link>

        <Link to={url + "2"} className="QuitarEstiloEnlace">
          <div className="elemento">
            <p>2</p>
          </div>
        </Link>

        <Link to={url + "3"} className="QuitarEstiloEnlace">
          <div className="elemento">
            <p>3</p>
          </div>
        </Link>

        <Link to={url + "4"} className="QuitarEstiloEnlace">
          <div className="elemento">
            <p>4</p>
          </div>
        </Link>

        <Link to={url + "5"} className="QuitarEstiloEnlace">
          <div className="elemento">
            <p>5</p>
          </div>
        </Link>

        <Link to={url + "6"} className="QuitarEstiloEnlace">
          <div className="elemento">
            <p>6</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SelectorCourse;
