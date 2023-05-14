import Cabecera from "./header/Cabecera.jsx";

const AdminSelectorDescarga = () => {

    return (
        <div clasName="container">
            <Cabecera direcion={"/Administrador"} />
            <div className="bodySelector">
                <p> Hola soy el Selector para descargar un fichero !!!!! </p>
            </div>
        </div>
    )
}

export default AdminSelectorDescarga; 