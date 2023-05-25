import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import AdministradorSelector from '../components/redirection/AdminstradorSelector';
import AdminSelectorSubject from '../components/redirection/AdminSelectorSubject.jsx';
import AdminSelectorCourse from '../components/redirection/AdminSelectorCourse.jsx';
import AdminDownloadData from './admin/AdminDownloadData.jsx';
import UploadFile from '../components/Upload/UploadFile.jsx';
import Login from "./Login.jsx";
import AdminEditor from './admin/AdminEditor.jsx';
import AdminUpdateData from './admin/AdminUpdateData.jsx';
import UsuarioSelector from "./UserSelector.jsx";



import UserSelector from "./UserSelector.jsx";
import MenuAdminUser from "./MenuAdminUser.jsx";
import MenuTables from "./MenuTables.jsx";
import SignUpUser from "./SignUpUser.jsx";
import UserTable from "./UserTable.jsx";




const Aplication = () => {

    const [editarDescargar, setEditarDescargar] = useState();

    return (
        <div className="container">
            <Routes>
                {/* LOGIN */}
                <Route path="/" element={<Login />} />


                {/* Versión del Usuario */}

                <Route path="/usuario" element={<UsuarioSelector />} ></Route>
                <Route path="/usuario/subir_archivo" element={<UploadFile enlace={"usuario"} />} ></Route>
                <Route path="/usuario/select" element={<AdminSelectorCourse editarDescargar={editarDescargar} enlace={"usuario"} />} ></Route>
                <Route path="/usuario/select/:id" element={<AdminSelectorSubject enlace={'usuario'} redireccion={"/usuario/select"} />}></Route>
                <Route path="/usuario/select_download/:curso/:asignatura" element={<AdminDownloadData enlace={'/usuario'} />} ></Route>

                {/* Versión del Administrador */}

                <Route path="/administrador" element={<AdministradorSelector setEditarDescargar={setEditarDescargar} />} ></Route>
                <Route path="/administrador/tablas" element={<AdminEditor setEditarDescargar={setEditarDescargar} enlace={'/administrador'} />} ></Route>
                <Route path="/administrador/subir_archivo" element={<UploadFile enlace={"administrador"} />} ></Route>
                <Route path="/administrador/select" element={<AdminSelectorCourse editarDescargar={editarDescargar} enlace={"administrador"} />} ></Route>
                <Route path="/administrador/select_curso/:id" element={<AdminSelectorSubject enlace={'administrador'} redireccion={'/administrador/select'} />}></Route>
                <Route path="/administrador/select_download/:curso/:asignatura" element={<AdminDownloadData enlace={'/administrador'} />} ></Route>
                <Route path="/administrador/select/:id" element={<AdminSelectorSubject enlace={'administrador'} redireccion={'/administrador/tablas'} editar={'SI'} />}></Route>
                <Route path="/administrador/editall/:curso/:asignatura" element={<AdminUpdateData enlace={'/Administrador/tablas'} />} ></Route>

            </Routes>
        </div>
    )
}
export default Aplication; 