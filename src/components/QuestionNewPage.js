import React, { Component } from 'react';
import QuestionForm from './QuestionForm';

class QuestionNewPage extends Component {
  render () {
    return (
      <main
        className="QuestionNewPage"
        style={{margin: '0 1rem'}}
      >
        <h1>New Question</h1>
        <QuestionForm />
      </main>
    );
  }
}

export default QuestionNewPage;
