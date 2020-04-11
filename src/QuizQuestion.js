import React, {Component} from 'react';

import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  handleClick(buttonText) {
    if(this.props.quiz_question.answer === buttonText) {
      this.props.showNextQuestionHandler();
    }
  }
  render() {
    return(
      <main>
        <section>
          <p>
            {this.props.quiz_question.instruction_text}
          </p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((element, index) => {
              return (<QuizQuestionButton 
                clickHandler={this.handleClick.bind(this)}
                key={index}
                button_text={element} 
                />)
            })}
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion;