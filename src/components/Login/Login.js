import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Failed to login");
    }
  };

  return (
    <>
      <Navbar />

      <Card className="forms">
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="form-link">
            Don't have an account? <Link to="/registration">Register</Link>
          </p>
          {error && <p className="error">{error}</p>}
          <Button disabled={loading} type="submit">
            Login
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default Login;
