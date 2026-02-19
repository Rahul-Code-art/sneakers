import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Toast, ToastContainer } from "react-bootstrap";

import "./login.css"

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

const [showToast, setShowToast] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    // Fake login logic (replace with API later)
    const fakeUser = {
      name: "John Doe",
      email: email,
    };

    login(fakeUser);

    // Clear form
    setEmail("");
    setPassword("");
    setError("");

   
 setShowToast(true);

setTimeout(() => {
  navigate("/", { replace: true });
}, 1500);

  };

  return (

     
   <div className="auth-container">
    <div className="auth-card">
      <h2>Login</h2>

      {error && <p className="error-text">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
     <ToastContainer position="top-end" className="p-3">
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        bg="success"
        delay={1500}
        autohide
      >
        <Toast.Body className="text-white">
          🎉 Login Successful!
        </Toast.Body>
      </Toast>
    </ToastContainer>
  </div>
  
  );
}

export default Login;
