import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/Header/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Regristration/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
    </Routes>
  );
}

export default App;
