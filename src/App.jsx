import React from 'react';
import './styles/App.css';
import Topbar from './components/Topbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
     <BrowserRouter>
      <Topbar/>
       { <Switch>
          <Route exact path='/' component={Home}  />
          {/* <Route  path='/products' component={Products}  />
          <Route  path='/cart' component={Cart}  /> */}
             {/* <Route  path='/details/:id' component={Details}  /> */}
             {/* <Route  path='/contact' component={Contact}  /> */}
         </Switch> }
</BrowserRouter>
  );
}

export default App;
