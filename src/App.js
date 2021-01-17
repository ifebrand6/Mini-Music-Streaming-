import React from 'react'
import './assets/stylesheet/authentication.css';
import Authentication from './components/authentication/authentication';
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Footer from './components/shared/footer';
import LandingPage from './main/landingPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <LandingPage/>
        <Footer/>
      </Route>
      <Route path="/login">
        <Authentication/>
      </Route>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
