import Cabecera from "../header/Cabecera.jsx";
import { Link, useParams } from "react-router-dom";

const SelectorSubject = ({ enlace, redireccion, editar }) => {
  const { id } = useParams();

  const subjectCourse = [
    { id: 1, title: "Mathematics", url: "Matematicas" },
    { id: 2, title: "Language", url: "Lengua" },
    { id: 3, title: "Social Studies", url: "Sociales" },
    { id: 4, title: "Natural Sciences", url: "Naturales" },
    { id: 5, title: "Physical Education", url: "Educacion_Fisica" },
    { id: 6, title: "Religion", url: "Religion" },
  ];
  let url2 = "download";
  if (editar === "SI") {
    url2 = "edit";
  }

  function contenido() {
    return (
      <div>
        <div className="TextCenter">Subject</div>

        <div className="bodySelector">
          {subjectCourse.map((elto, idx) => (
            <Link
              to={`/${enlace}/${url2}/${id}/${elto.url}`}
              className="QuitarEstiloEnlace"
              key={idx}
            >
              <div className="elemento">
                <p>{elto.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Cabecera direcion={redireccion} />

      {contenido()}
    </div>
  );
};

export default SelectorSubject;
