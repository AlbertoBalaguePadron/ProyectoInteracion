import "../../style/SubirStyle.css";
import FormularioSubirActualizar from "../forms/FormularioSubirActualizar";
import Cabecera from "../header/Cabecera.jsx";
import React, { useEffect, useState } from "react";
import { app, uploadFile } from "../../api/ConfigFirebase.js";
import { getList } from "../../api/ConfigFirebase.js";

const UploadFile = ({ enlace }) => {
  const [datafilter, setDatafilter] = useState();

  const recogerFilter = async () => {
    const list = await getList();
    let listaFiltro = [];
    list.forEach((doc) => {
      listaFiltro.push(doc.data().filtro);
    });
    setDatafilter(listaFiltro);
  };

  useEffect(() => {
    recogerFilter();
  }, []);

  const addFile = async (file, urlCreate, filtros) => {
    const urlArchivo = await uploadFile(file, urlCreate + file.name);
    const collectionRef = app.firestore().collection("TablaURLS");
    await collectionRef
      .doc()
      .set({
        nombre: file.name,
        url: urlArchivo,
        filtros: filtros,
        Url: urlCreate,
      });
    window.location.reload();
  };

  return (
    <div className="container">
      <Cabecera direcion={"/" + enlace} />
      <div className="bodyDescarga">
        <FormularioSubirActualizar
          addOrEdit={addFile}
          datafilter={datafilter}
        />
      </div>
    </div>
  );
};

export default UploadFile;
