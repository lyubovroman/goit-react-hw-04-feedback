import React, { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics'
import { AppContainer } from './App.styled';
import Section from 'components/Section/Section';

const feedbackOptions = ['good', 'neutral', 'bad'];

export default function App()  {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);


  

  const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGoodFeedback(good+1)
        break;
       case 'neutral':
        setNeutralFeedback(neutral+1)
        break;
       case 'bad':
        setBadFeedback(bad+1)
        break;
    
      default:
        break;
    }
  };

   const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

 const countPositiveFeedbackPercentage = () => {
  const total = countTotalFeedback();
  if (total === 0) {
    return 0;
  }
  return Math.round((good / total) * 100);
};


  
 
    return (
      <AppContainer>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        </Section>
      </AppContainer>
    );
  }



