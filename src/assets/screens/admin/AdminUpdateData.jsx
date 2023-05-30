import "../../style/EditStyle.css";
import Cabecera from "../../components/header/Cabecera.jsx";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getAllList, dropDataMaterial } from "../../api/ConfigFirebase.js";
import imagenBorrar from "../../img/ImagenBorrar.png";
import Modal from "react-modal";
import UpdateFile from "../../components/upload/UpdateFile";
import imagenCerrarModal from "../../img/backToFuture.png";

const AdminUpdateData = ({ redireccion }) => {
  const { course, subject } = useParams();
  const [listAllData, setListAllData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [idTarget, setIdTarget] = useState();

  const openModal = (item) => {
    setIdTarget(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setIdTarget("");
    setShowModal(false);
  };

  useEffect(() => {
    const recogerDatos = async () => {
      try {
        const urlDirection = course + "/" + subject + "/";
        const allData = await getAllList(urlDirection);
        setListAllData(allData);
      } catch (error) {
        console.error(error);
      }
    };
    recogerDatos();
  }, []);

  const HandleDelete = async (id, url, nombreArchivo) => {
    if (window.confirm("Estas seguro de querer eliminar el material ??")) {
      const res = await dropDataMaterial(id, url, nombreArchivo);
      if (res) {
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      }
    }
  };

  function pdfOImagen(nombre, url) {
    if (nombre.slice(-3) === "pdf") {
      return (
        <div>
          <object data={url} type="application/pdf" width="100%" height="300px">
            <p>
              No se puede mostrar el PDF. Puedes{" "}
              <a href={url}>Visualizarlo aquí</a>.
            </p>
          </object>
        </div>
      );
    } else {
      return (
        <a href={url} title={nombre}>
          <img
            className="imagenPrevisualizacion"
            src={url}
            alt="Previsualización de la imagen"
          />
        </a>
      );
    }
  }

  function mostrarContenido() {
    return (
      <div className="element-container">
        {listAllData.map((item) => (
          <div className="element" key={item.id}>
            <>{pdfOImagen(item.nombre, item.url, item.id)}</>
            <h3>{item.nombre}</h3>
            <p> ID: {item.id}</p>
            <p>#{item.filtros.join(" #")}</p>
            <div>
              <div>
                <button onClick={() => openModal(item.id)}>EDITAR</button>
              </div>
              <img
                src={imagenBorrar}
                alt=""
                className="imgDelete"
                onClick={() => HandleDelete(item.id, item.Url, item.nombre)}
              />
            </div>

            <Modal isOpen={showModal} onRequestClose={closeModal}>
              <img
                src={imagenCerrarModal}
                alt="Cerrar Modal"
                className="close-modal-button"
                onClick={() => closeModal()}
              />

              <div className="TituloEditar">
                <h2>Editar</h2>
              </div>

              <div className="Editar">
                <UpdateFile oldData={item} />
              </div>
            </Modal>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Cabecera direcion={redireccion} />

      <div className="bodySelector">
        {listAllData ? mostrarContenido() : <p>No hay datos para mostrarlos</p>}
      </div>
    </div>
  );
};
export default AdminUpdateData;
