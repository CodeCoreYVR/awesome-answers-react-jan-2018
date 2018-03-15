import React from 'react'
import FormErrors from './FormErrors';

function QuestionForm (props) {
  // props.onSubmit
  const { errors = [], onSubmit = () => {} } = props

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // See key => values from formData object
    // console.log(
    //   Array.from(formData.entries())
    // )
    onSubmit({
      title: formData.get('title'),
      body: formData.get('body')
    });
  }

  return (
    <form
      className="QuestionForm"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="title">Title</label> <br />
        <input name="title" id="title" />
        <FormErrors forField="title" errors={errors} />
      </div>

      <div>
        <label htmlFor="body">Body</label> <br />
        <textarea name="body" id="body" cols="60" rows="4" />
        <FormErrors forField="body" errors={errors} />
      </div>

      <div>
        <input type="submit" value="Submit"/>
      </div>
    </form>
  )
}

export default QuestionForm;
