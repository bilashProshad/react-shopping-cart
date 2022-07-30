import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";
import classes from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={classes.registration}>
      <h2>Registration</h2>
      <Form>
        <Input type="text" placeholder="full name" required />
        <Input type="text" placeholder="email" required />
        <Input type="password" placeholder="password" required />
        <Input type="password" placeholder="confirm password" required />
        <Button type="submit">Registration</Button>
      </Form>
    </div>
  );
};

export default Registration;
