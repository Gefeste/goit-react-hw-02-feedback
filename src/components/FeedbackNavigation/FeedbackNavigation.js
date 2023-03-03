import { Statistic } from 'components/Statistics/Statictic';
import propTypes from 'prop-types';
import { Button } from './FeedbackNavigation.styled';

export const FeedbackOptions = ({
  percentage,
  total,
  onLeaveFeedback,
  good,
  neutral,
  bad,
  options,
}) => {
  return (
    <div>
      {options.map(option => {
        return (
          <Button
            onClick={() => onLeaveFeedback(option)}
            type="button"
            key={option}
          >
            {option}
          </Button>
        );
      })}

      <Statistic
        total={total}
        good={good}
        neutral={neutral}
        bad={bad}
        percentage={percentage}
      />
    </div>
  );
};

FeedbackOptions.propTypes = {
  percentage: propTypes.func.isRequired,
  total: propTypes.func.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  options: propTypes.array.isRequired,
};
