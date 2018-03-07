import React from 'react';
import Field from './Field';

// When creating a react component, make sure to use
// CapitalizedCamelCase. React interprets lower
// components as HTML tags and will try to render as such
// ignoring your component.
function QuestionDetails (props) {
  const {author = {}} = props;
  // To write JavaScript expression inside of JSX,
  // use {} like the {props.title} below.
  // The expression must return:
  // - A string
  // - Or, a number
  // - Or, null/undefined
  // - Or, a React element
  // - Or, an array of React elements
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>By {author.full_name}</p>
      <Field name="View Count" value={props.view_count} />
      <Field name="Created At" value={props.created_at} />
      <Field name="Updated At" value={props.updated_at} />
    </div>
  );
}

export default QuestionDetails;
