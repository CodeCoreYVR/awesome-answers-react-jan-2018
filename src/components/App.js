import React from 'react';
import QuestionShowPage from './QuestionShowPage';
import QuestionIndexPage from './QuestionIndexPage';

// When building React applications, we create
// a root component that is the ancestor to all the
// components that we create. And, we render that
// component on the page with `ReactDOM.render()`.
// For this application, the `App` serves that role.
function App () {
  return (
    <div className="App">
      <QuestionIndexPage />
      <QuestionShowPage />
    </div>
  )
}

export default App;
