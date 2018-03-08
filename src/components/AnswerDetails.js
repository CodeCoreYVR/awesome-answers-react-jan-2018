import React from 'react';
import Field from './Field';

function AnswerDetails (props) {
  const {onDeleteClick = () => {}} = props;
  // 1em is equal to the font size of the parent tag.
  const style = {
    borderLeft: 'medium solid black',
    padding: '0 0.75em'
  };

  return (
    <div
      className="AnswerDetails"
      style={style}
    >
      <p>{props.body}</p>
      <p>By {props.author_full_name}</p>
      <Field name="Created At" value={props.created_at} />
      <button
        onClick={() => onDeleteClick(props.id)}
      >Delete</button>
    </div>
    // <div></div>
    // You can't return multiple React elements at once.
    // If you want to return, they must nested inside
    // a single React element.
  )
}

export default AnswerDetails;
