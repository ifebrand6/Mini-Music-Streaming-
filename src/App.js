import React from "react";
import "./assets/stylesheet/dashboard.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/shared/footer";
import LandingPage from "./main/landingPage";
import Dashboard from "./main/dashboard";
import Aunthentication from "./main/aunthentication";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
            <Footer />
          </Route>
          <Route path="/login">
            <Aunthentication/>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
