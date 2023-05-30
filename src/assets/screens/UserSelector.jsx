import Cabecera from "./header/Cabecera.jsx";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const UserSelector = () => {

    return (
        <div className="container">
            <Cabecera direcion={"/user"} />

            <div className="bodySelector">

                <Link to="/user/uploadfile" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                    Upload File
                    </Button>
                </Link>

                <Link to="/user/course" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Download File
                    </Button>
                </Link>

            </div>
        </div>
    )

}

export default UserSelector; 