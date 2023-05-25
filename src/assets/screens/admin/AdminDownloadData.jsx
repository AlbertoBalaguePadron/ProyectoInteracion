import '../../style/DescargarStyle.css';
import Cabecera from "../header/Cabecera.jsx";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getAllList } from '../../api/ConfigFirebase.js';


const AdminDownloadData = ({ enlace }) => {

    const { curso, asignatura } = useParams();
    const [listAllData, setListAllData] = useState();
    useEffect(() => {
        const recogerDatos = async () => {
            try {
                const urlDirection =  curso + '/' + asignatura + '/';
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
                <a href={url} title={nombre} download={nombre}>
                    <img className="imagenPrevisualizacion" src={url} alt="Previsualización de la imagen" />
                </ a>
            );
        }
    }

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
            <Cabecera direcion={enlace} />

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

export default AdminDownloadData;
