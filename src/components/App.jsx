import { Component } from 'react';
import { FeedbackOptions } from './FeedbackNavigation/FeedbackNavigation';
import { GlobalStyle } from './GlobalSyle';
import { Section } from './SectionTitle/SectionTitle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  capitalize = str => {
    return str.toUpperCase()
  };

  countTotalFeedback = (a, b, c) => {
    return a + b + c;
  };

  countPositiveFeedbackPercentage = (a, b, c) => {
    return (a / (a + b + c)) * 100;
  };

  addFeedback = feedback => {
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          toUp={this.capitalize}
          options={Object.keys(this.state)}
          percentage={this.countPositiveFeedbackPercentage}
          total={this.countTotalFeedback}
          onLeaveFeedback={this.addFeedback}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
        <GlobalStyle />
      </Section>
    );
  }
}
