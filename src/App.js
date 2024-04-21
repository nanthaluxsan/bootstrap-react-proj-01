import React, { Component } from "react";
import "./App.css";
import Footer from "./components/layeout/footer";
import NavBar from "./components/layeout/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
// react router
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import News from "./pages/News";
import NotFounPage from "./pages/NotFounPage";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/contact" Component={Contact} />
          <Route path="/details" Component={Details} />
          <Route path="/news" Component={News} />
          <Route path="*" Component={NotFounPage} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
