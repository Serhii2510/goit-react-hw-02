import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const dataFromLocalStorage = JSON.parse(
      window.localStorage.getItem('feedbacks')
    );
    if (dataFromLocalStorage) {
      return dataFromLocalStorage;
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = feedbackType => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const feedbackReset = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        feedbackReset={feedbackReset}
      />

      {totalFeedback > 0 && (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}

      {!totalFeedback && <Notification />}
    </>
  );
};

export default App;
