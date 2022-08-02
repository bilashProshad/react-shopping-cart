import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PublicOutlet from "./components/PublicOutlet";
import Registration from "./components/Regristration/Registration";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Header onShowCart={showCartHandler} />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/*" element={<PublicOutlet />}>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>

      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
    </>
  );
}

export default App;
