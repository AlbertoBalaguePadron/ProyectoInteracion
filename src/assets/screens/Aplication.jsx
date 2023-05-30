import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import AdminSelector from './admin/AdminSelector';
import SelectorSubject from '../components/redirection/SelectorSubject.jsx';
import SelectorCourse from '../components/redirection/SelectorCourse.jsx';
import DownloadData from "../components/download/DownloadData";
import UploadFile from '../components/upload/UploadFile.jsx';
import Login from "../components/forms/Login.jsx";
import MenuAdminTables from "./admin/MenuAdminTables";
import AdminUpdateData from "./admin/AdminUpdateData";
import UserSelector from "./regularUser/UserSelector.jsx";
import SignUpUser from "../components/forms/SignUpUser.jsx";
import UserTable from "./admin/UserTable.jsx";
import MenuAdminUser from "./admin/MenuAdminUser";

const Aplication = () => {

    const [editarDescargar, setEditarDescargar] = useState();

    return (
        <div className="container">
            <Routes>
                {/* LOGIN */}
                <Route path="/" element={<Login />} />

                {/* USER */}
                {/* MENU USER */}
                <Route path="/user" element={<UserSelector />} />

                { /*>> SUBIR ARCHIVO <<*/ }
                <Route path="/user/uploadfile" element={<UploadFile enlace={"user"} />} />

                { /*>> DESCARGAR ARCHIVOS <<*/ }
                <Route path="/user/course" element={<SelectorCourse editarDescargar={editarDescargar} enlace={"user"} redireccion={"/user"} />} />
                <Route path="/user/course/:id" element={<SelectorSubject enlace={'user'} redireccion={"/user/course"} />} />
                <Route path="/user/download/:course/:subject" element={<DownloadData enlace={'/user'} />} />

                {/* ADMIN */}

                {/* MENU ADMIN */}
                <Route path="/admin" element={<AdminSelector setEditarDescargar={setEditarDescargar} />} />
                
                { /*>> ADMINISTRAR TABLAS <<*/ }
                <Route path="/admin/tables" element={<MenuAdminTables setEditarDescargar={setEditarDescargar} enlace={'/admin'} />} />
                
                { /* EDITAR USUARIOS */ }
                <Route path="/admin/tables/users" element={<MenuAdminUser/>} />
                <Route path="/admin/tables/users/addusers" element={<SignUpUser/>} />
                <Route path="/admin/tables/users/userstable" element={<UserTable/>} />

                { /* EDITAR ARCHIVOS */ }
                <Route path="/admin/course" element={<SelectorCourse editarDescargar={editarDescargar} enlace={"admin"} redireccion={"/admin"}/>} />
                <Route path="/admin/course/:id" element={<SelectorSubject enlace={'admin'} redireccion={'/admin/course'} editar={'SI'} />} />
                <Route path="/admin/edit/:course/:subject" element={<AdminUpdateData redireccion={'/admin/course'} />} />

                { /*>> SUBIR ARCHIVOS <<*/ }
                <Route path="/admin/uploadfile" element={<UploadFile enlace={"admin"} />} />

                { /*>> DESCARGAR ARCHIVOS <<*/ }
                <Route path="/admin/download" element={<SelectorCourse editarDescargar={editarDescargar} enlace={"admin"} redireccion={"/admin"}/>} />
                <Route path="/admin/download/:id" element={<SelectorSubject enlace={'admin'} redireccion={'/admin/download'} />} />
                <Route path="/admin/download/:course/:subject" element={<DownloadData enlace={'/admin'} />} />
                
            </Routes>
        </div>
    )
}
export default Aplication; 