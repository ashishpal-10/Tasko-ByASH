import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/taskApi.js";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      console.log("Login successful:", data);

      // Save JWT token
      localStorage.setItem("token", data.token);

      alert("Login successful!");

      // Redirect to dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("Login failed:", error);

      alert(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  return (
       <div className="login-page">
      <div className="login-card">
        <h1>WELCOME BACK</h1>
        <p>Login to manage your tasks.</p>

        <form onSubmit={handleSubmit}>
          <label>EMAIL</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>PASSWORD</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;