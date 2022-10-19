import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedBackList,
  FeedBackItem,
  FeedBackBtn,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <FeedBackList>
      {options.map(option => (
        <FeedBackItem key={option}>
          <FeedBackBtn onClick={() => onClick(option)}>{option}</FeedBackBtn>
        </FeedBackItem>
      ))}
    </FeedBackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
