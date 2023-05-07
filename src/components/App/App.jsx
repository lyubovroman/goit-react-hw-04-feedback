import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics'
import { AppContainer } from './App.styled';
import Section from 'components/Section/Section';

const feedbackOptions = ['good', 'neutral', 'bad'];

export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onLeaveFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

   countTotalFeedback = ({ good, bad, neutral } = this.state) => {
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  const total = this.countTotalFeedback();
  if (total === 0) {
    return 0;
  }
  return Math.round((good / total) * 100);
};


  
  render() {
    return (
      <AppContainer>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={"Statistics"}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </AppContainer>
    );
  }
}


