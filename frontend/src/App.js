import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Pages
import HomeScreen from './components/Pages/HomePage';
import ProductScreen from './components/Pages/ProductPage';
import CartScreen from './components/Pages/CartPage';

//component
import Navbar from './components/navbar/Navbar';
import Backdrop from './components/backdrop/BackDrop';
import SideDrawer from './components/sideDrawer/SideDrawer';

function App() {

  const [toggle, setToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setToggle(true)} />
      <SideDrawer show={toggle} click={() => setToggle(false)} />
      <Backdrop show={toggle} click={() => setToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;