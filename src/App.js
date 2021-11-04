import React from "react";
import Dashboard from "./common/dashboard/Dashboard";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/login/Login";
import RutaPrivada from "./components/rutaPrivada/RutaPrivada";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        Inicio de Sesion
          <Route path="/" exact component={Login}>
            {/* <Login></Login> */}
          </Route>
        {/* Panel de Control (Dashboard) */}
          <RutaPrivada path="/principal" component={Dashboard}/>
            {/* <Dashboard></Dashboard> */}
          {/* </Route> */}
      </Switch> 
  </BrowserRouter>    
    
  );
}

export default App;
