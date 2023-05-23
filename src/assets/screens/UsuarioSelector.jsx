import Cabecera from "./header/Cabecera.jsx";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const UsuarioSelector = () => {

    return (
        <div className="container">
            <Cabecera direcion={"/Usuario"} />

            <div className="bodySelector">

                <Link to="/Usuario/Subir_Archivo" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Subir Archivo
                    </Button>
                </Link>

                <Link to="/Usuario/Select" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Download File
                    </Button>
                </Link>

            </div>
        </div>
    )

}

export default UsuarioSelector; 