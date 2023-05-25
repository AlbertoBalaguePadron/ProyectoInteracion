import Cabecera from "./header/Cabecera.jsx";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const UserSelector = () => {

    return (
        <div className="container">
            <Cabecera direcion={"/usuario"} />

            <div className="bodySelector">

                <Link to="/usuario/subir_archivo" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Subir Archivo
                    </Button>
                </Link>

                <Link to="/usuario/select" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Download File
                    </Button>
                </Link>

            </div>
        </div>
    )

}

export default UserSelector; 