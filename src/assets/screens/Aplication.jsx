import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdministradorSelector from './AdminstradorSelector.jsx';
import AdminSelectorAsignatura from './AdminSelectorAsignatura.jsx';
import AdminDescargarDatos from './AdminDescargarDatos.jsx';
import AdminSelectorCurso from './AdminSelectorCurso.jsx';
import SubirArchivo from './SubirArchivo.jsx';
import AdminActualizarDatos from './AdminActualizarDatos.jsx'; 
import UserSelector from "./UserSelector.jsx";
import Login from "./Login.jsx";
import MenuAdminUser from "./MenuAdminUser.jsx";
import MenuTables from "./MenuTables.jsx";


const Aplication = () => {

    const [editarDescargar, setEditarDescargar] = useState();

    return (
        <div className="container">
            <Routes>
                {/* LOGIN */}
                <Route path="/" element={<Login/>} />

                {/* MENU PRINCIPAL USUARIO */}
                <Route path="/usuario" element={<UserSelector />} ></Route>

                {/* ACCIONES DE ARCHIVOS */}
                <Route path="/usuario/subir_Archivo" element={<SubirArchivo enlace={"usuario"} />} />
                <Route path="/usuario/select" element={<AdminSelectorCurso editarDescargar={editarDescargar} enlace={"usuario"}/>} />
                <Route path="/usuario/select/:id" element={<AdminSelectorAsignatura enlace={'usuario'} redireccion={"/usuario/select"}/>} />
                <Route path="/usuario/select_download/:curso/:asignatura" element={<AdminDescargarDatos enlace={'/usuario'}/>} ></Route>

                {/* ******************** */}

                {/* MENU PRINCIPAL ADMINISTRADOR */}
                <Route path="/administrador" element={<AdministradorSelector setEditarDescargar={setEditarDescargar} />} />
                
                {/* ADMINISTRAR USUARIOS */}
                <Route path="/administrador/tablas" element={<MenuTables/>} />
                <Route path="/administrador/usuarios" element={<MenuAdminUser/>} />
                <Route path="/administrador/usuarios/aniadirusuario"  />
                <Route path="/administrador/usuarios/verusuarios"  />

                {/* ADMINISTRAR ARCHIVOS */}
                <Route path="/administrador/subir_Archivo" element={<SubirArchivo enlace={"administrador"}/>} ></Route>
                <Route path="/administrador/select" element={<AdminSelectorCurso editarDescargar={editarDescargar} enlace={"administrador"} />} />
                <Route path="/administrador/select_curso/:id" element={<AdminSelectorAsignatura enlace={'administrador'} redireccion={'/dministrador/select'} />} />
                <Route path="/administrador/select_download/:curso/:asignatura" element={<AdminDescargarDatos enlace={'/administrador'} />} />

                {/* Rutas ACtualizar  */}
                {/* <Route path="/Administrador/Select/:curso/:asignatura" element={<AdminActualizarDatos />} ></Route> */}
                
            </Routes>
        </div>
    )
}

export default Aplication; 