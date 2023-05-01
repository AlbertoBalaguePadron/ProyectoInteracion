import Cabecera from "./header/Cabecera.jsx";
import { Link } from "react-router-dom";

const AdministradorSelector = () => {

    return (
        <div clasName="container">
            <Cabecera direcion={"#"} />

            <div className="bodySelector">

                <div className="elemento">
                    <Link to="#">
                        <p>Manage Tables</p>
                    </Link>
                </div>

                <div className="elemento">
                    <Link to="#">
                        <p>Upload File</p>
                    </Link>
                </div>

                <div className="elemento">
                    <Link to="#">
                        <p>Download File</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default AdministradorSelector; 