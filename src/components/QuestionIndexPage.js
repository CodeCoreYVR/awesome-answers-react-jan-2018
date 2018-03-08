import React from 'react';
import Field from './Field';
import questionsData from '../questionsData';

// The React Component parent class is also available
// as a property of the React default import object.
class QuestionIndexPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: questionsData
    }

    // When using a method as a callback, we must bind
    // this to otherwise we won't have access to any properties
    // of `this` include the state, setState and the props.

    // `.bind()` is a method of functions that effectively
    // creates new function that is copy of the function
    // where `this` is bound permanently.
    this.deleteQuestion = this.deleteQuestion.bind(this)
  }

  deleteQuestion (event) {
    const {currentTarget} = event
    // console.log(currentTarget.dataset.id)

    const {questions} = this.state;
    const questionId = parseInt(currentTarget.dataset.id);
    console.log(questionId)
    // To delete a question, will have to update the state
    // to version of the state where that question is no longer
    // present.
    this.setState({
      questions: questions
        .filter(question => question.id !== questionId)
    })
    // Everytime you want to change the state, use the this.setState()
    // method. This will notify React that it potentially needs
    // to update the DOM based on the new data in the state.

    // Modifying this.state directly will cause headaches and not
    // reflect any changes to the DOM.
    // DO NOT DO IT! 😱
  }

  render () {
    const { questions } = this.state;

    return (
      <main
        className="QuestionIndexPage"
        style={{margin: '0 1rem'}}
        >
          <h2>Questions</h2>
          <ul>
            {
              questions.map(
                question => (
                  <li key={question.id}>
                    <a href="">{question.title}</a>
                    <Field name="Author" value={question.author.full_name} />
                    <button
                      data-id={question.id}
                      onClick={this.deleteQuestion}
                    >Delete</button>
                  </li>
                )
              )
            }
          </ul>
        </main>
      )
  }
}

export default QuestionIndexPage;
