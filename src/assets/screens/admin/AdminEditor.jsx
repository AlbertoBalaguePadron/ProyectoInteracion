import Cabecera from "../header/Cabecera";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const AdminEditor = ({setEditarDescargar, enlace}) => {

    const setEditar_Descargar = (data) => {
        setEditarDescargar(data)
    };

    return (
        <div className="container">
            <Cabecera direcion={enlace} />

            <div className="bodySelector">
                <Link to="/admin/tables/users" className="QuitarEstiloEnlace">
                <Button className="elemento">
                        Users
                    </Button>
                </Link>


                <Link to="/admin/course" className="QuitarEstiloEnlace" >
                    <Button className="elemento" onClick={() => setEditar_Descargar("Editar")}>
                        Edit Files
                    </Button>
                </Link>


            </div>
        </div>
    )

}

export default AdminEditor; 
