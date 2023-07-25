import React from "react";
import { BrowserRouter } from "react-router-dom"; /* {} => const/typed/ named imports*/
import Menu from './component/Menu' /* default imports*/

function App(props){
  return(
      <BrowserRouter>
         <Menu/>
      </BrowserRouter>
  )
}

export default App