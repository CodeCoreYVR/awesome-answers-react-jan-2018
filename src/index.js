import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// When creating a react component, make sure to use
// CapitalizedCamelCase. React interprets lower
// components as HTML tags and will try to render as such
// ignoring your component.
function QuestionDetails () {
  return (
    <div>
      <h2>What is your favourite color?</h2>
      <p>
        Red, blue, green, purple, yellow, magenta, hot-pink, etc.
      </p>
      <p>By Jon Snow</p>
      <p><strong>View Count:</strong> 32</p>
      <p><strong>Created At:</strong> 2017-01-01</p>
      <p><strong>Updated At:</strong> 2017-01-01</p>
    </div>
  );
}

function AnswerDetails () {
  return (
    <div>
      <p>What is this?</p>
      <p>By Jon Snow</p>
      <p><strong>Created At:</strong> 2017-01-01</p>
    </div>
    // <div></div>
    // You can't return multiple React elements at once.
    // If you want to return, they must nested inside
    // a single React element.
  )
}

function QuestionShowPage () {
  return (
    <main className="QuestionShowPage">
      <QuestionDetails />
      <h3>Answers</h3>
      <AnswerDetails />
    </main>
  )
}

// When building React applications, we create
// a root component that is the ancestor to all the
// components that we create. And, we render that
// component on the page with `ReactDOM.render()`.
// For this application, the `App` serves that role.
function App () {
  return (
    <QuestionShowPage />
  )
}

ReactDOM.render(
  // JSX tags are translated into React.createElement()
  // function calls which return React elements.
  // The JSX below is equivalent to:
  // `React.createElement(QuestionDetails)`
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
