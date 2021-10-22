import React from "react";
import Dashboard from "./common/dashboard/Dashboard";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Inicio de Sesion */}
          {/* <Route path="/" exact>
            <PagLogin></PagLogin>
          </Route> */}
        {/* Panel de Control (Dashboard) */}
          <Route path="/">
            <Dashboard></Dashboard>
          </Route>
      </Switch> 
  </BrowserRouter>    
    
  );
}

export default App;
