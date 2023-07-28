import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; /* {} => const/typed/ named imports*/
import Menu from './component/Menu' /* default imports*/
import Register from "./component/Auth/Register";
import Create from './component/Create';
import Update from './component/Update';
import Login from "./component/Auth/Login";
import Pnf from './component/Pnf';
import Home from "./component/Home";
import PrivateRouter from "./PrivateRoute/PrivateRouter";

import { ToastContainer } from "react-toastify";

function App(props){
  return(
      <BrowserRouter>
         <Menu/>
         <Routes>
          <Route element={<PrivateRouter/>} >
              <Route path={`/`} element={<Home/>} />
              <Route path={`/create`} element={<Create/>} />
              <Route path={`/Update/:id`} element={<Update/>} />
          </Route>
          <Route path={`/Login`} element={<Login/>} />
          <Route path={`/register`} element={<Register/>} />
          <Route path={`/*`} element={<Pnf/>} />
         </Routes>
      </BrowserRouter>
  )
}

export default App