import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import AdministradorSelector from './AdminstradorSelector.jsx';
import AdminSelectorAsignatura from './AdminSelectorAsignatura.jsx';
import AdminDescargarDatos from './AdminDescargarDatos.jsx';
import AdminSelectorCurso from './AdminSelectorCurso.jsx';
import SubirArchivo from './SubirArchivo.jsx';
import AdminEditor from './AdminEditor.jsx';
import AdminActualizarDatos from './AdminActualizarDatos.jsx';
import UsuarioSelector from "./UsuarioSelector.jsx";


const Aplication = () => {

    const [editarDescargar, setEditarDescargar] = useState();

    return (
        <div className="container">
            <Routes>
                {/*  LOGIN  */}




                {/* Versión del Usuario */}

                <Route path="/Usuario" element={<UsuarioSelector />} ></Route>

                <Route path="/Usuario/Subir_Archivo" element={<SubirArchivo enlace={"Usuario"} />} ></Route>
                <Route path="/Usuario/Select" element={<AdminSelectorCurso editarDescargar={editarDescargar} enlace={"Usuario"} />} ></Route>
                <Route path="/Usuario/Select/:id" element={<AdminSelectorAsignatura enlace={'Usuario'} redireccion={"/Usuario/Select"} />}></Route>
                <Route path="/Usuario/Select_Download/:curso/:asignatura" element={<AdminDescargarDatos enlace={'/Usuario'} />} ></Route>



                {/* Versión del Administrador */}

                <Route path="/Administrador" element={<AdministradorSelector setEditarDescargar={setEditarDescargar} />} ></Route>


                <Route path="/Administrador/Tablas" element={<AdminEditor setEditarDescargar={setEditarDescargar} />} ></Route>

                <Route path="/Administrador/Subir_Archivo" element={<SubirArchivo enlace={"Administrador"} />} ></Route>
                <Route path="/Administrador/Select" element={<AdminSelectorCurso editarDescargar={editarDescargar} enlace={"Administrador"} />} ></Route>
                <Route path="/Administrador/Select_Curso/:id" element={<AdminSelectorAsignatura enlace={'Administrador'} redireccion={'/Administrador/Select'} />}></Route>
                <Route path="/Administrador/Select_Download/:curso/:asignatura" element={<AdminDescargarDatos enlace={'/Administrador'} />} ></Route>

                {/* Rutas ACtualizar  */}
                <Route path="/Administrador/Select/:id" element={<AdminSelectorAsignatura enlace={'Administrador'} redireccion={'/Administrador/SelectEdit'} editar={'SI'} />}></Route>
                <Route path="/Administrador/EditALL/:curso/:asignatura" element={<AdminActualizarDatos enlace={'/Administrador/Tablas'} />} ></Route>
                
            </Routes>
        </div>
    )
}
export default Aplication; 