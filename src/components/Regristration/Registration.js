import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Form from "../Form/Form";
import Input from "../Input/Input";

const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const { signup } = useAuthContext();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords don't match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, fullName);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <Card className="forms">
      <h2>Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="full name"
          onChange={(e) => setFullName(e.target.value)}
          required
        />
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
        <Input
          type="password"
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <p className="form-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        {error && <p className="error">{error}</p>}
        <Button disabled={loading} type="submit">
          Registration
        </Button>
      </Form>
    </Card>
  );
};

export default Registration;
