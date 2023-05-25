import '../../style/SubirStyle.css';
import React, { useState, useEffect } from "react";
import Dropzone from "../dropItem/Dropzone.jsx";

const FormularioSubirActualizar = ({ addOrEdit, datafilter, oldData }) => {
    const [selectedFile, setSelectedFile] = useState("");
    const [curso, setCurso] = useState("");
    const [asignatura, setAsignatura] = useState("");
    const [filtros, setFiltros] = useState("");
    const [listaFiltros, setListaFiltros] = useState([]);

    useEffect(() => {
        if (oldData) {
            const resultado = '/'+ oldData.Url;
            const partes = resultado.slice(1, -1).split("/");
            setCurso(partes[0]);
            setAsignatura(partes[1]);
            setListaFiltros(oldData.filtros);
        }
    }, [oldData]);

    const handleChangeCurso = (cursoSelec) => {
        setCurso(cursoSelec);
    };

    const handleChangeAsignatura = (asigSelect) => {
        setAsignatura(asigSelect);
    };

    const handleFileSelection = (file) => {
        setSelectedFile(file);
    };

    const handleChangeFiltro = (filtro) => {
        setFiltros(filtro);
    };

    const handleGuardarFiltro = () => {
        if (filtros) {
            const filtroExistente = listaFiltros.find((filtro) => filtro === filtros);
            if (!filtroExistente) {
                setListaFiltros((prevListaFiltros) => [...prevListaFiltros, filtros]);
            }
            setFiltros("");
        }
    };


    const handleEliminarFiltro = (filtro) => {
        setListaFiltros((prevListaFiltros) =>
            prevListaFiltros.filter((f) => f !== filtro)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (selectedFile && asignatura && curso && listaFiltros.length > 0) {
                const urlCreate = curso + "/" + asignatura + "/";
                if (oldData) {
                    addOrEdit(selectedFile, urlCreate, listaFiltros, oldData);
                }
                addOrEdit(selectedFile, urlCreate, listaFiltros);
            } else {
                alert("Faltan datos por introducir ... ");
            }
        } catch (error) {
            console.error(error);
            alert("Fallo interno al subir el archivo");
        }
    };

    return (
        <div className="SubirData">
            <form>
                <div className="dropZone">
                    {selectedFile ? (
                        <div>
                            <p>Archivo seleccionado: {selectedFile.name}</p>
                            <p>Tamaño: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                    ) : (
                        <Dropzone onFileSelected={handleFileSelection} />
                    )}
                </div>

                <div className="Selector">
                    <select
                        value={curso}
                        onChange={(event) => handleChangeCurso(event.target.value)}
                    >
                        <option value="">Selecciona un curso</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>

                <div className="Selector">
                    <select
                        value={asignatura}
                        onChange={(event) => handleChangeAsignatura(event.target.value)}
                    >
                        <option value="">Selecciona una asignatura</option>
                        <option value="Lengua">Lengua</option>
                        <option value="Matematicas">Matemáticas</option>
                        <option value="Sociales">Siencias Sociales</option>
                        <option value="Naturales">Ciencias de la Naturaleza</option>
                        <option value="Educacion_Fisica">Educación Física</option>
                        <option value="Religion">Religión</option>
                    </select>
                </div>

                {datafilter ? (
                    <div className="Selector">
                        <select
                            value={filtros}
                            onChange={(event) => handleChangeFiltro(event.target.value)}
                        >
                            <option value="">Selecciona un filtro</option>
                            {datafilter.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <button type="button" onClick={handleGuardarFiltro}>
                            Guardar filtro
                        </button>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}

                <div className="containerFilter">
                    <div>
                        <h3>Lista de filtros seleccionados:</h3>
                    </div>
                    {listaFiltros.length > 0 ? (
                        <div className="elementoFilterContainer">
                            {listaFiltros.map((filtro, index) => (
                                <div
                                    className="elementoFilter"
                                    key={index}
                                    onClick={() => handleEliminarFiltro(filtro)}
                                >
                                    {filtro}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No se han seleccionado filtros</p>
                    )}
                </div>

                <button onClick={handleSubmit}>SEND</button>
            </form>
        </div>
    );
};

export default FormularioSubirActualizar;
