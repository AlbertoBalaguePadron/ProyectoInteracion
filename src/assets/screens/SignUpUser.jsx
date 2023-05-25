import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Cabecera from "./header/Cabecera.jsx";
import logo from "../img/logo.png";

function SignUpUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const auth = getAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccess("¡Cuenta creada exitosamente!");
        setEmail("");
        setPassword("");
      })
      .catch(() => {
        setError("Error al crear la cuenta");
      });
  };

  return (
    <div className="container-signup">
      <Cabecera direcion={"/administrador/opcionesusuarios"} />
      <img src={logo} alt="Logo" className="img-salesianos" />
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          className="input-signup"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="password">Contraseña: </label>
        <input
          className="input-signup"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button className="addUser-button" type="submit">
          Crear cuenta
        </button>
      </form>
    </div>
  );
}
export default SignUpUser;
