import PropTypes from 'prop-types';
import { FeedbackButton, FeedbackContainer } from './FeedbackOptions.styled';

export default function FeedbackOptions({options,onLeaveFeedback}) {
  return (
    <FeedbackContainer>
      {options.map(option => (
        <FeedbackButton
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(`${option}`)}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackContainer>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};