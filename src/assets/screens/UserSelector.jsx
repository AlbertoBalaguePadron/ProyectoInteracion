import Cabecera from "./header/Cabecera.jsx";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const UserSelector = () => {

    return (
        <div className="container">
            <Cabecera direcion={"/usuario"} />

            <div className="bodySelector">

                <Link to="/usuario/Subir_Archivo" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Subir Archivo
                    </Button>
                </Link>

                <Link to="/usuario/Select" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Download File
                    </Button>
                </Link>

            </div>
        </div>
    )

}

export default UserSelector; 