import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./compoents/Header"
import Home from "./pages/Home"
import Checkout from './pages/Checkout';
import Login from './pages/Login';
function App() {
  return (
    <Router>
      <div className="app">
      <Switch>

        <Route path="/checkout">
        <Header/>
          <Checkout/>
        </Route>

        <Route path="/login">
          <Header/>
          <Login/>
        </Route>

        {/*this is the default route */}
        <Route path="/">
          <Header/>
          <Home/>
        </Route>

      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
