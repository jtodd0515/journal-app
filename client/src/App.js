import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext, UserContextProvider } from './Context/contexts/UserContext';
import Nav from './Components/Nav';
import Login from './Pages/Login';
import Register from './Pages/Register';
import UserHome from './Pages/UserHome';
import Welcome from './Pages/Welcome';
import Entry from './Pages/Entry';

// master
export const App = () => {
  return (
    <UserContextProvider>
      <UserContext.Consumer>
        {({ user }) => {
          return (
            <Router>
              <div className="App">
                <Nav />
                <Switch>
                  <Route exact path={["/", "/welcome"]} component={Welcome} />
                  {user.loggedIn && (
                    <Route exact path="/userhome" component={UserHome} />
                  )}
                  {!user.loggedIn && (
                    <Route exact path="/userhome" component={Login} />
                  )}
                   {user.loggedIn && (
                    <Route exact path="/entry" component={Entry} />
                  )}
                  {!user.loggedIn && (
                    <Route exact path="/entry" component={Login} />
                  )}
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </div>
            </Router>
          );
        }}
      </UserContext.Consumer>
    </UserContextProvider>
  );
  
};

export default App;
