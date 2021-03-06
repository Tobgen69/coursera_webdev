import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand,} from "reactstrap";
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from "./shared/dishes";

//function App() {
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
        <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">
                A NavbarBrand within Navbar
              </NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes}/>
        </div>
    );
  }
}

export default App;




   {/*<Navbar dark color="primary">*/}
      {/*  <div className="container">*/}
      {/*    <NavbarBrand href="/">*/}
      {/*      A second NavbarBrand within second Navbar*/}
      {/*    </NavbarBrand>*/}
      {/*     <NavbarBrand href="/">*/}
      {/*      A third NavbarBrand within same Navbar*/}
      {/*    </NavbarBrand>*/}
      {/*  </div>*/}
      {/*</Navbar>*/}
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}