import Cabecera from "../../screens/header/Cabecera.jsx";
import { Link, useParams } from "react-router-dom";

const SelectorSubject = ({ enlace, redireccion, editar }) => {
  const { id } = useParams();

  const asignaturaPorCurso = [
    { id: 1, title: "Matemáticas", url: "Matematicas" },
    { id: 2, title: "Lengua", url: "Lengua" },
    { id: 3, title: "Sociales", url: "Sociales" },
    { id: 4, title: "Naturales", url: "Naturales" },
    { id: 5, title: "Educación física", url: "Educacion_Fisica" },
    { id: 6, title: "Religión", url: "Religion" },
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
          {asignaturaPorCurso.map((elto, idx) => (
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
