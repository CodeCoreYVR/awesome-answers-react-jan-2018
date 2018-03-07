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

ReactDOM.render(
  // JSX tags are translated into React.createElement()
  // function calls which return React elements.
  // The JSX below is equivalent to:
  // `React.createElement(QuestionDetails)`
  <QuestionDetails />,
  document.getElementById('root')
);
registerServiceWorker();
