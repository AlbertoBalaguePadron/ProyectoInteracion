import Cabecera from "./header/Cabecera.jsx";
import { useParams } from "react-router-dom";

const AdminActualizarDatos = () => {
    const { curso, asignatura } = useParams();


    return (
        <div className="container">
            <Cabecera direcion={"/Administrador"} />

            <div className="bodySelector">

                <p>Holaaaa soy el curso = {curso} y la asignatura = {asignatura} aqui estaran los materiales para descargarlos</p>

            </div>
        </div>
    )
}

export default AdminActualizarDatos; 