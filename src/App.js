import React from "react";
import Dashboard from "./common/dashboard/Dashboard";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/login/Login";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        Inicio de Sesion
          <Route path="/" exact>
            <Login></Login>
          </Route>
        {/* Panel de Control (Dashboard) */}
          <Route path="/principal">
            <Dashboard></Dashboard>
          </Route>
      </Switch> 
  </BrowserRouter>    
    
  );
}

export default App;
