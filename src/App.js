import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Ajout from "./pages/Ajout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Boutton  from  "./components/Boutton";
import BouttonEdit from "./components/BouttonEdit";

function App() {
  return (
<div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/a-propos" exact component={About}/>
          <Route path="/add-movies" exact component={Ajout}/>
          <Route path="/movie/:id" component={Boutton}/>
          <Route path="/edit/:id" component={BouttonEdit}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
