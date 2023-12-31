import { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddTutorials";
import TutorialsList from "./components/TutorialList";
import TutorialWrapper from "./components/TutorialWrappers";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/tutorials"} className="navbar-brand">
              bezKoder
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/tutorials"} className="nav-link">
                  Tutorials
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Routes>
              <Route path="/" element={<TutorialsList />} />
              <Route path="/tutorials" element={<TutorialsList />} />
              <Route path="/add" element={<AddTutorial />} />
              <Route path="/tutorials/:id" element={<TutorialWrapper />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
