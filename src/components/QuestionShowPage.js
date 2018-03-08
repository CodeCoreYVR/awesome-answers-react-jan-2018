import React, { Component } from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerDetails from './AnswerDetails';
import AnswerList from './AnswerList';
import questionData from '../questionData';

class QuestionShowPage extends Component {
  render () {
    // To pass props to React elements, set them with
    // "HTML attrbutes" inside JSX. Each attribute will
    // act as a property of the component's `props` object.

    // 1rem is == to the font-size of the root tag (<html> ...).
    return (
      <main
        className="QuestionShowPage"
        style={{
          margin: '0 1rem'
        }}
        >
          <QuestionDetails {...questionData} />
          <h3>Answers</h3>
          <AnswerList answers={questionData.answers} />
        </main>
      )
  }
}

export default QuestionShowPage;
