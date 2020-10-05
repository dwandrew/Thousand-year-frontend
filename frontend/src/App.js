import React from 'react';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import  {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <h1>Thousand Year Chonicler</h1>
        <Switch>
          <Route exact path='/' component = {Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
