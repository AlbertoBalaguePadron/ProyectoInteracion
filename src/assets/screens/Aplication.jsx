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


                {/* Versión del Usuario */}

                <Route path="/user" element={<UserSelector />} ></Route>
                <Route path="/user/subir_archivo" element={<UploadFile enlace={"user"} />} ></Route>
                <Route path="/user/select" element={<AdminSelectorCourse editarDescargar={editarDescargar} enlace={"user"} />} ></Route>
                <Route path="/user/select/:id" element={<AdminSelectorSubject enlace={'user'} redireccion={"/user/select"} />}></Route>
                <Route path="/user/select_download/:curso/:asignatura" element={<AdminDownloadData enlace={'/user'} />} ></Route>

                {/* Versión del Administrador */}

                <Route path="/admin" element={<AdministradorSelector setEditarDescargar={setEditarDescargar} />} ></Route>
                <Route path="/admin/tables" element={<AdminEditor setEditarDescargar={setEditarDescargar} enlace={'/admin'} />} ></Route>
                <Route path="/admin/tables/users" element={<MenuAdminUser/>} />
                <Route path="/admin/tables/users/addusers" element={<SignUpUser/>} />
                <Route path="/admin/tables/users/userstable" element={<UserTable/>} />


                <Route path="/admin/uploadfile" element={<UploadFile enlace={"admin"} />} ></Route>
                <Route path="/admin/select" element={<AdminSelectorCourse editarDescargar={editarDescargar} enlace={"admin"} />} ></Route>
                <Route path="/admin/select_curso/:id" element={<AdminSelectorSubject enlace={'admin'} redireccion={'/admin/select'} />}></Route>
                <Route path="/admin/select_download/:curso/:asignatura" element={<AdminDownloadData enlace={'/admin'} />} ></Route>
                <Route path="/admin/select/:id" element={<AdminSelectorSubject enlace={'admin'} redireccion={'/admin/tablas'} editar={'SI'} />}></Route>
                <Route path="/admin/editall/:curso/:asignatura" element={<AdminUpdateData enlace={'/admin/tablas'} />} ></Route>

            </Routes>
        </div>
    )
}
export default Aplication; 