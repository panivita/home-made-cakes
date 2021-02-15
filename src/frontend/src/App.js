import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CakesPage } from "./pages/cakes-page";
import { BookingPage } from "./pages/booking-page";
import { Thanks } from "./pages/thank-page";
import { Auto } from "./pages/search-page";
import { RecipesPage } from "./pages/recipes-page";
import Background from "./img/background.jpg";
import Logo from "./img/homemade-logo.png";

import "./reset.css";
import "./App.css";
import { AboutPage } from "./pages/about-page";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header-container">
          <nav className="main-menu">
            <ul className="left-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
            <div className="center-menu">
              <a href="/">
                <img src={Logo} alt="homemade with love" />
              </a>
            </div>
            <ul className="right-menu">
              <li>
                <Link to="/cakes">Cakes</Link>
              </li>
              <li>
                <Link to="/Recipes">Blog</Link>
              </li>
            </ul>
          </nav>
        </header>

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
