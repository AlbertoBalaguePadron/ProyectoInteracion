import Cabecera from "./header/Cabecera.jsx";
import { useParams } from "react-router-dom";

const AdminActualizarDatos = () => {
    const { curso, asignatura } = useParams();


    return (
        <div className="container">
            <Cabecera direcion={"/Administrador"} />

            <div className="bodySelector">
                <p>Holaaaa soy el curso = {curso} y la asignatura = {asignatura} aqui estaran los materiales para actualizarlos</p>

                {/* <div className="elemento">
                    <p>{elto.title}</p>
                </div> */}

            </div>
        </div>
    )
}

export default AdminActualizarDatos; 