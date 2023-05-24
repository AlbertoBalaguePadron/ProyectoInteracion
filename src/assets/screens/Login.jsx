import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../api/ConfigFirebase";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import "../style/Login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        const isAdmin = user.email === "sergio@gmail.com";

        if (isAdmin) {
          navigate("/administrador");
        } else {
          navigate("/usuario");
        }
      })
      .catch((error) => {
        setErrorMessage("Incorrect e-mail or password");
      });
  };

  return (
    <div className="App">
      <img src={logo} alt="Logo" className="logo" />
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="buttonn" type="submit">
          Login
        </button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Login;
