import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

ReactDOM.render(
  // JSX tags are translated into React.createElement()
  // function calls which return React elements.
  // The JSX below is equivalent to:
  // `React.createElement(QuestionDetails)`
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
