import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import AdministradorSelector from './AdminstradorSelector.jsx';
import AdminSelectorAsignatura from './AdminSelectorAsignatura.jsx';
import AdminActualizarDatos from './AdminActualizarDatos.jsx';
import AdminSelectorCurso from './AdminSelectorCurso.jsx';
import SubirArchivo from './SubirArchivo.jsx';
import AdminEditor from './AdminEditor.jsx'; 


const Aplication = () => {

    const [editarDescargar, setEditarDescargar] = useState();

    return (
        <div className="container">
            <Routes>
                {/* <Route path="/" element={<Login/>} ></Route> */}
                <Route path="/Administrador" element={<AdministradorSelector setEditarDescargar={setEditarDescargar} />} ></Route>
                <Route path="/Administrador/Tablas" element={<AdminEditor />} ></Route>


                <Route path="/Administrador/Subir_Archivo" element={<SubirArchivo />} ></Route>
                <Route path="/Administrador/Select" element={<AdminSelectorCurso editarDescargar={editarDescargar} />} ></Route>
                <Route path="/Administrador/Select_Curso/:id" element={<AdminSelectorAsignatura />}></Route>
                <Route path="/Administrador/Select/:curso/:asignatura" element={<AdminActualizarDatos />} ></Route>




            </Routes>
        </div>
    )
}

export default Aplication; 