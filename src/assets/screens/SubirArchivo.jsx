import Cabecera from "./header/Cabecera.jsx";

const SubirArchivo = () => {


    return (
        <div clasName="container">
            <Cabecera direcion={"/Administrador"} />

            <div className="bodySelector">

                <p>Holaaaa soy el que va a subir archivos a la api para guardarlas  </p>

            </div>
        </div>
    )
}

export default SubirArchivo; 