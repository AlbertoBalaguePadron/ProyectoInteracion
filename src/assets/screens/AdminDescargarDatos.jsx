import '../style/DescargarStyle.css';
import Cabecera from "./header/Cabecera.jsx";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getAllList, getListByID } from '../api/ConfigFirebase.js';


const AdminActualizarDatos = () => {
    const { curso, asignatura } = useParams();
    const [listAllData, setListAllData] = useState();

    useEffect(() => {
        const recogerDatos = async () => {
            try {
                const urlDirection = '/' + curso + '/' + asignatura + '/';
                const allData = await getAllList(urlDirection);
                setListAllData(allData);

            } catch (error) {
                console.error(error);
            }
        }
        recogerDatos();

    }, []);



    
    function pdfOImagen(nombre, url) {
        if (nombre.slice(-3) === "pdf") {
            return (
                <div>
                    <object
                        data={url}
                        type="application/pdf"
                        width="100%"
                        height="300px"
                    >
                        <p>
                            No se puede mostrar el PDF. Puedes <a href={url}>Visualizarlo aquí</a>.
                        </p>
                    </object>
                </div>
            );
        } else {
            return (
                <div>
                    <img className="imagenPrevisualizacion" src={url} alt="Previsualización de la imagen" onClick={()=> DescargarArchivo(url,nombre)}/>
                </div>
            );
        }
    }



    const DescargarArchivo = (url, nombreArchivo) => {

        const link = document.createElement('a');
        link.href = url;
        link.download = nombreArchivo;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);      };




    function mostrarContenido() {

        return (
            <div className="element-container">
                {listAllData.map((item) => (
                    <div className="element" key={item.id}>
                        <>{pdfOImagen(item.nombre, item.url)}</>
                        <h3>{item.nombre}</h3>
                        <p>#{item.filtros.join(" #")}</p>
                    </div>
                ))}
            </div>
        );
    }



    return (
        <div>
            <Cabecera direcion={"/Administrador"} />

            <div className="bodySelector">
                    {listAllData ? (
                        mostrarContenido()
                    ) : (
                        <p>No hay datos para mostrarlos</p>
                    )}
            </div>
        </div>
    )
}

export default AdminActualizarDatos;
