import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import {
  // When doing named imports, you can `as` to rename
  // an import in context of a file. As shown, below:
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import QuestionShowPage from './QuestionShowPage';
import QuestionIndexPage from './QuestionIndexPage';
import QuestionNewPage from './QuestionNewPage';
import SignInPage from './SignInPage';
import NavBar from './NavBar';
import AuthRoute from './AuthRoute';

// When building React applications, we create
// a root component that is the ancestor to all the
// components that we create. And, we render that
// component on the page with `ReactDOM.render()`.
// For this application, the `App` serves that role.
class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: null
    };

    this.signIn = this.signIn.bind(this);
  }

  componentWillMount () {
    this.signIn();
  }

  signIn () {
    const jwt =  localStorage.getItem('jwt');

    if (jwt) {
      const payload = jwtDecode(jwt);
      this.setState({
        user: payload
      });
    }
  }

  isSignedIn () {
    // !! to convert this.state.user into a boolean.
    return !!this.state.user;
  }

  render () {
    const { user } = this.state;

    return (
      <Router>
        <div className="App">
          <NavBar user={user} />
          {/*
            When wrapping routes inside of a Switch component,
            only the first Route that matches will be rendered.
          */}
          <Switch>
            <AuthRoute
              isAuthenticated={this.isSignedIn()}
              exact
              path="/questions" component={QuestionIndexPage}
            />
            <AuthRoute
              isAuthenticated={this.isSignedIn()}
              path="/questions/new"
              component={QuestionNewPage}
            />
            <AuthRoute
              isAuthenticated={this.isSignedIn()}
              path="/questions/:id"
              component={QuestionShowPage}
            />
            {/* <Route path="/sign_in" component={SignInPage} /> */}
            <Route
              path="/sign_in"
              render={
                props => (
                  <SignInPage
                    {...props}
                    onSignIn={this.signIn}
                  />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
