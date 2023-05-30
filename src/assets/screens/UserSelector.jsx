import Cabecera from "./header/Cabecera.jsx";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const UserSelector = () => {

    return (
        <div className="container">
            <Cabecera direcion={"/user"} />

            <div className="bodySelector">

                <Link to="/user/subir_archivo" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Subir Archivo
                    </Button>
                </Link>

                <Link to="/user/select" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Download File
                    </Button>
                </Link>

            </div>
        </div>
    )

}

export default UserSelector; 