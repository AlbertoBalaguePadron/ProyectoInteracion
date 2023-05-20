import Cabecera from "./header/Cabecera.jsx";
import { Link, useParams } from "react-router-dom";

const AdminSelectorAsignatura = () => {
    const { id } = useParams();

    const asignaturaPorCurso = [
        { id: 1, title: "Matemáticas" },
        { id: 2, title: "Lengua" },
        { id: 3, title: "Sociales" },
        { id: 4, title: "Naturales" },
        { id: 5, title: "Educación física" },
        { id: 6, title: "Religión" },
    ];

    function contenido() {
        return (
            <div className="bodySelector">

                    {
                        asignaturaPorCurso.map((elto, idx) => (
                            <Link to={`/Administrador/Select/${id}/${elto.title}`} className="QuitarEstiloEnlace" key={idx}>
                                <div className="elemento">
                                    <p>{elto.title}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
        )
    }




    return (
        <div className="container">
            <Cabecera direcion={"/Administrador/Select"} />

            {contenido()}

        </div>
    )
}

export default AdminSelectorAsignatura; 