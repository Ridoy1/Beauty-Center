import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login/Login';
import AddEvents from './component/Home/AddEvents/AddEvents';
import { createContext, useState } from 'react';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import ProductDoard from './component/Productboard/ProductDoard/ProductDoard';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/addEvents">
            <AddEvents/>
          </PrivateRoute>
          <Route path="/product">
            <ProductDoard/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
