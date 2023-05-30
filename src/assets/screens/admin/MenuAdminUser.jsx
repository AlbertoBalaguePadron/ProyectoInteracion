import Cabecera from "../header/Cabecera";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const MenuAdminUser = () => {

    return (
        <div className="container">
            <Cabecera direcion={"/admin/tables"} />

            <div className="bodySelector">

                <Link to="/admin/tables/users/addusers" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Add Users
                    </Button>
                </Link>

                <Link to="/admin/tables/users/userstable" className="QuitarEstiloEnlace" >
                    <Button className="elemento">
                        Users Table
                    </Button>
                </Link>

            </div>
        </div>
    )

}

export default MenuAdminUser; 