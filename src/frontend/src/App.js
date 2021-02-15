import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CakesPage } from "./pages/cakes-page";
import { BookingPage } from "./pages/booking-page";
import { Thanks } from "./pages/thank-page";
import { Auto } from "./pages/search-page";
import { RecipesPage } from "./pages/recipes-page";
import { AboutPage } from "./pages/about-page";
import { Header } from "./pages/Header";
import Background from "./img/background.jpg";

import "./reset.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <div
              className="background"
              style={{ backgroundImage: `url(${Background})` }}
            >
              <Auto />
            </div>
          </Route>
          <Route path="/cakes">
            <CakesPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/cake/:id">
            <BookingPage />
          </Route>
          <Route path="/thank">
            <Thanks />
          </Route>
          <Route path="/Recipes">
            <RecipesPage />
          </Route>
        </Switch>

        <footer>
          <section className="copyright">© 2020 Victoria Kush</section>
        </footer>
      </div>
    </Router>
  );
}

export default App;
