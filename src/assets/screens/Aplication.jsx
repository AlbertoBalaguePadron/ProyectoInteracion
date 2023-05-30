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



import UserSelector from "./UserSelector.jsx";

import SignUpUser from "./SignUpUser.jsx";
import UserTable from "./UserTable.jsx";
import MenuAdminUser from "./MenuAdminUser";




const Aplication = () => {

    const [editarDescargar, setEditarDescargar] = useState();

    return (
        <div className="container">
            <Routes>
                {/* LOGIN */}
                <Route path="/" element={<Login />} />

                {/* USER */}
                <Route path="/user" element={<UserSelector />} />

                { /* SUBIR ARCHIVO */ }
                <Route path="/user/uploadfile" element={<UploadFile enlace={"user"} />} />
                <Route path="/user/course" element={<AdminSelectorCourse editarDescargar={editarDescargar} enlace={"user"} redireccion={"/user"} />} />
                <Route path="/user/course/:id" element={<AdminSelectorSubject enlace={'user'} redireccion={"/user/course"} />} />
                <Route path="/user/download/:course/:subject" element={<AdminDownloadData enlace={'/user'} />} />

                {/* ADMIN */}

                {/* MENU ADMIN */}
                <Route path="/admin" element={<AdministradorSelector setEditarDescargar={setEditarDescargar} />} />
                
                { /*>> ADMINISTRAR TABLAS <<*/ }
                <Route path="/admin/tables" element={<AdminEditor setEditarDescargar={setEditarDescargar} enlace={'/admin'} />} />
                
                { /* EDITAR USUARIOS */ }
                <Route path="/admin/tables/users" element={<MenuAdminUser/>} />
                <Route path="/admin/tables/users/addusers" element={<SignUpUser/>} />
                <Route path="/admin/tables/users/userstable" element={<UserTable/>} />

                { /* EDITAR ARCHIVOS */ }
                <Route path="/admin/course" element={<AdminSelectorCourse editarDescargar={editarDescargar} enlace={"admin"} redireccion={"/admin"}/>} />
                <Route path="/admin/course/:id" element={<AdminSelectorSubject enlace={'admin'} redireccion={'/admin/course'} editar={'SI'} />} />
                <Route path="/admin/edit/:course/:subject" element={<AdminUpdateData redireccion={'/admin/course'} />} />

                { /*>> SUBIR ARCHIVOS <<*/ }
                <Route path="/admin/uploadfile" element={<UploadFile enlace={"admin"} />} />

                { /*>> DESCARGAR ARCHIVOS <<*/ }
                <Route path="/admin/download" element={<AdminSelectorCourse editarDescargar={editarDescargar} enlace={"admin"} redireccion={"/admin"}/>} />
                <Route path="/admin/download/:id" element={<AdminSelectorSubject enlace={'admin'} redireccion={'/admin/download'} />} />
                <Route path="/admin/download/:course/:subject" element={<AdminDownloadData enlace={'/admin'} />} />
                
            </Routes>
        </div>
    )
}
export default Aplication; 