import React from 'react';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ImmortalDetails from './components/immortals/ImmortalDetails'
import SignIn from './components/auth/SignIn'
import  {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <h1>Thousand Year Chonicler</h1>
        <Switch>
          <Route exact path='/' component = {Dashboard}/>
          <Route exact path='/immortals/:id' component = {ImmortalDetails}/>
          <Route exact path='/signin' component = {SignIn}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
