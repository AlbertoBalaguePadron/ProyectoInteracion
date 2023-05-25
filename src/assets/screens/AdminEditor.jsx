import Cabecera from "./header/Cabecera.jsx";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const AdminEditor = ({setEditarDescargar}) => {

    const setEditar_Descargar = (data) => {
        setEditarDescargar(data)
    };

    return (
        <div className="container">
            <Cabecera direcion={"/Administrador"} />

            <div className="bodySelector">
                <Link to="/Administrador/UsuariosTabla" className="QuitarEstiloEnlace">
                    <div className="elemento">
                        <p>Usuarios</p>
                    </div>
                </Link>


                <Link to="/Administrador/Select" className="QuitarEstiloEnlace" >
                    <Button className="elemento" onClick={() => setEditar_Descargar("Editar")}>
                        Editar Archivos 
                    </Button>
                </Link>


            </div>
        </div>
    )

}
