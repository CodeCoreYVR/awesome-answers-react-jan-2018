import React from 'react';
import AnswerDetails from './AnswerDetails';

function AnswerList (props) {
  const {answers = []} = props;

  return (
    <ul
      className="AnswerList"
      style={{
        listStyle: "none",
        padding: 0
      }}
    >
      {
        answers.map(
          answer => (
            <li key={answer.id}>
              {/* <AnswerDetails
                body={answer.body}
                created_at={answer.created_at}
                author_full_name={answer.author_full_name}
              />
              👇 shortcut for 👆
              ... takes all properties of an object and applies
              as props to a react element
              */}
              <AnswerDetails {...answer} />
            </li>
          )
        )
      }
    </ul>
  )
}

export default AnswerList;
