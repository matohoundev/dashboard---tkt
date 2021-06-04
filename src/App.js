import './App.scss';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { Fragment } from 'react';
import Navbar from './starter/navbar/Navbar';
import Home from './home/Home';
import Details from './details/Details';
import NotFound from './error/404/Notfound';

function App() {
  return (
    <Fragment>
      <Router>

        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />   
          <Route path="/404" component={NotFound} />
          <Route path="/details" component={Details} /> 
          <Redirect to="/404" />
        </Switch>
        
      </Router>
    </Fragment>
  );
}

export default App;
