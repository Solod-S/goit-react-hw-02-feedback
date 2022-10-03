import React from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { AppHeader, AppSection, AppImgLeft, AppImgRigth } from './App.styled';
import image from '../img/feedBack.png';
import image2 from '../img/feedBack2.png';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state).reduce(
      (total, value) => total + value,
      0
    );
    return totalFeedback;
  };
  countPositiveFeedbackPercentage = () => {
    // const persantage = Math.trunc(
    //   (this.state.good / this.countTotalFeedback()) * 100
    // );

    const persantage = Math.round(
      (100 / this.countTotalFeedback()) * this.state.good
    );
    return persantage;
  };
  feedbackToAdd = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };
  render() {
    const stateKeys = Object.keys(this.state);

    return (
      <>
        <AppImgLeft src={image} />
        <AppSection>
          <AppHeader>Please leave feedback</AppHeader>
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={this.feedbackToAdd}
          />
          {!this.countTotalFeedback() ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </AppSection>
        <AppImgRigth src={image2} />
      </>
    );
  }
}
export default App;
