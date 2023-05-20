import Cabecera from "./header/Cabecera.jsx";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const AdministradorSelector = ({ setEditarDescargar }) => {




    const setEditar_Descargar = (param) => {
        setEditarDescargar(param)
    };

    return (
        <div className="container">
            <Cabecera direcion={"/Administrador"} />

            <div className="bodySelector">
                <Link to="/Administrador/Tablas" className="QuitarEstiloEnlace">
                    <div className="elemento">
                        <p>Administrar Tablas</p>
                    </div>
                </Link>

                <Link to="/Administrador/Subir_Archivo" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Subir Archivo
                    </Button>
                </Link>

                <Link to="/Administrador/Select" className="QuitarEstiloEnlace" >
                    <Button className="elemento" onClick={() => setEditar_Descargar("Descargar")}>
                        Download File
                    </Button>
                </Link>

            </div>
        </div>
    )

}

export default AdministradorSelector; 