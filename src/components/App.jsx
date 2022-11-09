import { useState, useEffect  } from 'react';
import Section from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [positivePercentage, setPositivePercentage] = useState(0)
  
  const hendleIncrement = evt => {
   
    const { name } = evt.target
    switch (name) {
      case "good":
        setGood(state=> (state + 1))
        break;
      case 'neutral':
        setNeutral(state=> (state + 1))
        break;
      case "bad":
        setBad(state=> (state + 1))
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    let totalFeedback = good + neutral + bad
    setTotal(totalFeedback)
    let positiveFeedbackPercentage= Math.round((good * 100) / totalFeedback)
    setPositivePercentage(positiveFeedbackPercentage)
}, [good, neutral, bad])
  
  
   
    const options = ['good', 'neutral', 'bad'];
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={options} onClick={hendleIncrement} />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivFeedback={positivePercentage + '%'}
            />
           ) : (
            <Notification message="There is no feedback" />
          )} 
        </Section>
      </div>
    );
  }

