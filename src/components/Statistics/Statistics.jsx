import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsText} from './Statistics.styled.jsx'
import  Notification  from 'components/Notification/Notification';

export default function Statistics ({ good, neutral, bad, total, positiveFeedback=0}) {
    return total !== 0 ? (
      <StatisticsContainer>
      <StatisticsText>Good: {good}</StatisticsText>
      <StatisticsText>Neutral: {neutral}</StatisticsText>
      <StatisticsText>Bad: {bad}</StatisticsText>
      <StatisticsText>Total: {total} </StatisticsText>

      <StatisticsText>Positive feedback: {positiveFeedback}%</StatisticsText>
    </StatisticsContainer>
    
  ) : (
    <Notification message="There is no feedbacks yet"></Notification>
    );
    
};

Statistics.propTypes = {
   good:PropTypes.number.isRequired,
          neutral:PropTypes.number.isRequired,
          bad:PropTypes.number.isRequired,
          total:PropTypes.number.isRequired,
          positivePercentage:PropTypes.number.isRequired,
}
