import FormularioSubirActualizar from '../components/formularioSubirActualizar/FormularioSubirActualizar';
import '../style/SubirStyle.css';
import Cabecera from "./header/Cabecera.jsx";
import React, { useEffect, useState } from "react";
import { app, uploadFile } from '../api/ConfigFirebase.js';
import { getList } from '../api/ConfigFirebase.js';

const SubirArchivo = () => {

    /** Eliminar warnings relacionados con el DropZone */
    console.warn = () => { };


    // const [selectedFile, setSelectedFile] = useState('');
    // const [curso, setcurso] = useState('');
    // const [asignatura, setAsignatura] = useState('');
    // const [archivoUrl, setArchivoUrl] = useState('')ç

    const [datafilter, setDatafilter] = useState();


    const recogerFilter = async () => {
        const list = await getList();
        let listaFiltro = []; 
            list.forEach((doc) => {
                listaFiltro.push(doc.data().filtro);
            });
            setDatafilter(listaFiltro); 
    }


    useEffect(() => {
        recogerFilter();
    }, []);

    const addFile = async (file, urlCreate, filtros) => {
        const urlArchivo = await uploadFile(file, urlCreate + file.name);
        const collectionRef = app.firestore()
            .collection("TablaURLS");

        await collectionRef.doc(file.name)
            .set({ nombre: file.name, url: urlArchivo, filtros: filtros, Url: urlCreate });

            window.location.reload();

    }


    return (
        <div className="container">
            <Cabecera direcion={"/Administrador"} />
            <div className="bodyDescarga">
                <FormularioSubirActualizar addOrEdit={addFile} datafilter={datafilter} />
            </div>
        </div>
    )
}

export default SubirArchivo; 