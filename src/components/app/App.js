import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Button variant="contained" color="primary" component={Link} to="/">Home</Button>
              </li>
              <li>
                <Button variant="contained" color="primary" component={Link} to="/about">About</Button>
              </li>
              <li>
                <Button variant="contained" color="primary" component={Link} to="/users">Users</Button>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
