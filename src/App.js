import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import Privacy from "./containers/privacy/Privacy";
import { useLocation, Route, Routes } from "react-router-dom";

function App() {
  const location = useLocation();
  const state = location.state;

  return (
    
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Main />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
    
  );
}

export default App;
