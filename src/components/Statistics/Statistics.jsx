import PropTypes from 'prop-types';
import { Container, Text } from './Statistics.styled';
export const Statistics = ({ good, neutral, bad, total, positivFeedback }) => {
  return (
    <Container>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive Feedback: {positivFeedback}</Text>
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivFeedback: PropTypes.string.isRequired,
};
