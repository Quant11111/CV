import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import ViewPdf from './pages/ViewPdf';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Knowledges" component={Knowledges}/>
          <Route path="/Portfolio" component={Portfolio}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/ViewPdf" component={ViewPdf}/>
          <Route component={NotFound}/>  
        </Switch>     
      </BrowserRouter>
    </>
  );
};

export default App;
