import { Routes, Route } from 'react-router-dom';
import AdministradorSelector from "./AdminstradorSelector.jsx";


const Aplication = () => {
    return (
        <div className="container">
            <Routes>
                {/* <Route path="/" element={<Login/>} ></Route> */}
                <Route path="/Administrador" element={<AdministradorSelector />} ></Route>
            </Routes>
        </div>
    )
}

export default Aplication; 