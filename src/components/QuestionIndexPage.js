import React from 'react';
import Field from './Field';
import questionsData from '../questionsData';

function QuestionIndexPage () {
  return (
    <main
      className="QuestionIndexPage"
      style={{margin: '0 1rem'}}
    >
      <h2>Questions</h2>
      <ul>
        {
          questionsData.map(
            question => (
              <li key={question.id}>
                <a href="">{question.title}</a>
                <Field name="Author" value={question.author.full_name} />
              </li>
            )
          )
        }
      </ul>
    </main>
  )
}

export default QuestionIndexPage;
