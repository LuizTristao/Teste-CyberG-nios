import React from "react";
import { AsideMenu } from "./Components/AsideMenu";
import HeaderComponent from "./Components/Header";
import { Home } from "./Pages/Home";
import { GlobalStyle } from "./Styles/global";
function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>

  );
}

export default App;

