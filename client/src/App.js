import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import SavedPage from "./components/SavedPage/SavedPage";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/saved" exact>
          <SavedPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
