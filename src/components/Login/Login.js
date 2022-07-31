import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Form from "../Form/Form";
import Input from "../Input/Input";

const Login = () => {
  return (
    <Card className="forms">
      <h2>Login</h2>
      <Form>
        <Input type="text" placeholder="email" required />
        <Input type="password" placeholder="password" required />
        <p className="form-link">
          Don't have an account? <Link to="/registration">Register</Link>
        </p>
        <Button type="submit">Login</Button>
      </Form>
    </Card>
  );
};

export default Login;
