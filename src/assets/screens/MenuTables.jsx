import Cabecera from "./header/Cabecera.jsx";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const MenuTables = () => {

    return (
        <div className="container">
            <Cabecera direcion={"/Administrador"} />

            <div className="bodySelector">
                <Link to="/administrador/usuarios" className="QuitarEstiloEnlace">
                <Button className="elemento">
                        Usarios
                    </Button>
                </Link>


                <Link to="/administrador/select" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Editar Archivos 
                    </Button>
                </Link>

            </div>
        </div>
    )

}

export default MenuTables; 