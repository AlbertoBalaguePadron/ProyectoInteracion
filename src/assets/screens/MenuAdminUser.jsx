import Cabecera from "./header/Cabecera.jsx";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const MenuAdminUser = () => {

    return (
        <div className="container">
            <Cabecera direcion={"/usuario"} />

            <div className="bodySelector">

                <Link to="/administrador/usuarios/aniadirusuario" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Añadir Usuario 
                    </Button>
                </Link>

                <Link to="/administrador/usuarios/verusuarios" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Tabla de Usuarios 
                    </Button>
                </Link>

            </div>
        </div>
    )

}

export default MenuAdminUser; 