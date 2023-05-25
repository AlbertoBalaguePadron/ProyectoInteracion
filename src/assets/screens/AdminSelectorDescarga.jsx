import Cabecera from "./header/Cabecera.jsx";

const AdminSelectorDescarga = () => {
    return (
        <div clasName="container">
            <Cabecera direcion={"/administrador"} />
            <div className="bodySelector">
                <p> Hola soy el Selector para actualizar un fichero !!!!! </p>
            </div>
        </div>
    )
}

export default AdminSelectorDescarga; 