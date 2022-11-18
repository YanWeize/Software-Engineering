import logo from "./media/logoPasteur.png";
import './App.css';
import React from "react";
import Login from "./container/home/Login.js";
import { Link } from "react-router-dom";
import Routes from "./Routes.js"
class App extends React.Component {
  render() {
    return (
      <div >
        <header>
          <nav className="banner container-fluid">
            <div className="row justify-content-start banner-container align-items-center">
              <div className="col-3 ">
                <img className="pasteur-logo" src={logo} alt='none' />
              </div>
              <div className="col-6 ">
                <h2 className="banner-text">Collaborations Internationales <br></br>Institut Pasteur</h2>
              </div>
              <div className="col-3">
                <React.StrictMode>
                  <Login />
                </React.StrictMode>
              </div>
            </div>
          </nav><br></br>
        </header>
        <React.StrictMode>
          <Routes />
        </React.StrictMode>
      </div >
    );
  }
}

export default App;
