import React, {Component} from 'react';

class QuizEnd extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <a href=''>Reset Quiz</a>
      </div>
    )
  }
}

export default QuizEnd;