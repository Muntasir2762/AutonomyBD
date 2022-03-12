import './App.css';
import Login from './Components/Login';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Addproduct from './Components/Addproduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <div className="header">
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/login">LogIn</NavLink>
        <NavLink activeClassName="active" to="/dashboard">All Products</NavLink>
        <NavLink activeClassName="active" to="/add">Add Product</NavLink>

      </div>

      <div className='content'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/add" component={Addproduct} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>

      </BrowserRouter>
      
    </div>

  );
}

export default App;
