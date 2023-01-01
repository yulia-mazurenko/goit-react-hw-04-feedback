import React, { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = feedbackName => {
    switch (feedbackName) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = `${(good * 100) / countTotalFeedback()}`;
    return `${Math.round(Number(totalFeedback))}%`;
  };

  const options = ['good', 'neutral', 'bad'];
  const totalFeedbacks = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedbacks}
          positivePercentage={positiveFeedback}
        />
      </Section>
    </>
  );
}

// class AppOld extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = feedbackName => {
//     this.setState(prevState => ({
//       [feedbackName]: prevState[feedbackName] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const totalFeedback = `${
//       (this.state.good * 100) / this.countTotalFeedback()
//     }`;
//     return `${Math.round(Number(totalFeedback))}%`;
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     const totalFeedbacks = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.addFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={totalFeedbacks}
//             positivePercentage={positiveFeedback}
//           />
//         </Section>
//       </>
//     );
//   }
// }
