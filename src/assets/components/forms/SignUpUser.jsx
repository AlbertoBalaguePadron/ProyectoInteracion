import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Cabecera from "../header/Cabecera.jsx";
import "../../style/SignUpUser.css";

function SignUpUser({ handleNewEmail }) {
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
        setSuccess("¡Account created successfully!");
        handleNewEmail(email);
        setEmail("");
        setPassword("");
      })
      .catch(() => {
        setError("Error");
      });
  };

  return (
    <div className="container-signup">
      <Cabecera direcion={"/admin/tables/users"} />
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <h3 className="signup-tittle"> Register a new user </h3>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-label" htmlFor="email">
          Email:
        </label>
        <input
          className="input-signup"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label className="signup-label" htmlFor="password">
          Password:{" "}
        </label>
        <input
          className="input-signup"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button className="addUser-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default SignUpUser;
