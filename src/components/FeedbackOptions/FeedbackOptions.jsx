// import PropTypes from 'prop-types';
import { OptionsList, OptionsItem, OptionsBtn } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsList>
    {options.map(key => (
      <OptionsItem key={key}>
        <OptionsBtn onClick={() => onLeaveFeedback(key)}>{key}</OptionsBtn>
      </OptionsItem>
    ))}
  </OptionsList>
);
