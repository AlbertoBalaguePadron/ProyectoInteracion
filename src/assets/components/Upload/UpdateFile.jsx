import FormularioSubirActualizar from "../forms/FormularioSubirActualizar.jsx";
import "../../style/SubirStyle.css";
import React, { useEffect, useState } from "react";
import {
  dropDataMaterial,
  editDataBase,
  uploadFile,
} from "../../api/ConfigFirebase.js";
import { getList } from "../../api/ConfigFirebase.js";

const UpdateFile = ({ oldData }) => {
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

  const editFile = async (file, urlCreate, filtros) => {
    await editDataBase(file, oldData, {
      Url: urlCreate,
      filtros: filtros,
      nombre: file.name,
      url: "",
    });
  };

  return (
    <div className="container">
      <div className="bodyDescarga">
        <FormularioSubirActualizar
          addOrEdit={editFile}
          datafilter={datafilter}
          oldData={oldData}
        />
      </div>
    </div>
  );
};

export default UpdateFile;
