import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const PublicOutlet = () => {
  const { currentUser } = useAuthContext();

  return !currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PublicOutlet;
