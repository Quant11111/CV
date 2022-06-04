import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Home from "./pages/Home/Home";
import Knowledges from "./pages/Knowledge/Knowledge";
import NotFound from "./pages/NotFound/NotFound";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import ViewPdf from "./pages/ViewPdf/ViewPdf";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/CV" exact component={Home} />
          <Route path="/Knowledge" component={Knowledges} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
          <Route path="/ViewPdf" component={ViewPdf} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
