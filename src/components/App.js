import React from 'react';
import {
  // When doing named imports, you can `as` to rename
  // an import in context of a file. As shown, below:
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import QuestionShowPage from './QuestionShowPage';
import QuestionIndexPage from './QuestionIndexPage';
import NavBar from './NavBar';

// When building React applications, we create
// a root component that is the ancestor to all the
// components that we create. And, we render that
// component on the page with `ReactDOM.render()`.
// For this application, the `App` serves that role.
function App () {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/questions" component={QuestionIndexPage} />
        <Route path="/questions/id" component={QuestionShowPage} />
      </div>
    </Router>
  )
}

export default App;
