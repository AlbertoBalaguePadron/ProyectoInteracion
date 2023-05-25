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
                {/*  LOGIN  */}
                <Route path="/" element={<Login/>} />

                {/* Versión del Usuario */}

                <Route path="/usuario" element={<UserSelector />} ></Route>

                <Route path="/usuario/Subir_Archivo" element={<SubirArchivo enlace={"usuario"} />} />
                <Route path="/usuario/Select" element={<AdminSelectorCurso editarDescargar={editarDescargar} enlace={"usuario"}/>} />
                <Route path="/usuario/Select/:id" element={<AdminSelectorAsignatura enlace={'usuario'} redireccion={"/usuario/Select"}/>} />
                <Route path="/usuario/Select_Download/:curso/:asignatura" element={<AdminDescargarDatos enlace={'/usuario'}/>} ></Route>

                {/* Versión del Administrador */}

                <Route path="/administrador" element={<AdministradorSelector setEditarDescargar={setEditarDescargar} />} />
                


                <Route path="/Administrador/tablas" element={<MenuTables />} ></Route>

                <Route path="/administrador/usuarios" element={<MenuAdminUser/>}></Route>

                <Route path="/Administrador/Subir_Archivo" element={<SubirArchivo enlace={"Administrador"}/>} ></Route>
                <Route path="/Administrador/Select" element={<AdminSelectorCurso editarDescargar={editarDescargar} enlace={"Administrador"} />} />
                <Route path="/Administrador/Select_Curso/:id" element={<AdminSelectorAsignatura enlace={'Administrador'} redireccion={'/Administrador/Select'} />} />
                <Route path="/Administrador/Select_Download/:curso/:asignatura" element={<AdminDescargarDatos enlace={'/Administrador'} />} />


                {/* Rutas ACtualizar  */}
                {/* <Route path="/Administrador/Select/:curso/:asignatura" element={<AdminActualizarDatos />} ></Route> */}
                

            </Routes>
        </div>
    )
}

export default Aplication; 