import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MainHeader from "./components/Header/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Regristration/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/" element={<MainHeader />}>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
    </Routes>
  );
}

export default App;
