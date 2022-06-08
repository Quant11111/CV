import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import NotFound from "./pages/NotFound/NotFound";

import Home from "./pages/Home/Home";
import Knowledge from "./pages/Knowledge/Knowledge";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import ViewPdf from "./pages/ViewPdf/ViewPdf";

import HomeFr from "./pages/Home/HomeFr";
import KnowledgeFr from "./pages/Knowledge/KnowledgeFr";
import ContactFr from "./pages/Contact/ContactFr";
import PortfolioFr from "./pages/Portfolio/PortfolioFr";
import ViewPdfFr from "./pages/ViewPdf/ViewPdfFr";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Knowledge" component={Knowledge} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
          <Route path="/ViewPdf" component={ViewPdf} />

          <Route path="/Fr" exact component={HomeFr} />
          <Route path="/KnowledgeFr" component={KnowledgeFr} />
          <Route path="/PortfolioFr" component={PortfolioFr} />
          <Route path="/ContactFr" component={ContactFr} />
          <Route path="/ViewPdfFr" component={ViewPdfFr} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
