import React from "react";
import GlobalStyles from "./styles/global";
import { BrowserRouter } from "react-router-dom";

import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
