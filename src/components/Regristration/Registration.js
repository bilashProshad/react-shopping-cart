import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Form from "../Form/Form";
import Input from "../Input/Input";

const Registration = () => {
  return (
    <Card className="forms">
      <h2>Registration</h2>
      <Form>
        <Input type="text" placeholder="full name" required />
        <Input type="text" placeholder="email" required />
        <Input type="password" placeholder="password" required />
        <Input type="password" placeholder="confirm password" required />
        <p className="form-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <Button type="submit">Registration</Button>
      </Form>
    </Card>
  );
};

export default Registration;
