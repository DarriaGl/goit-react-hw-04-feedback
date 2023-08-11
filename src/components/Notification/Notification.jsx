import React from 'react';
import propTypes from 'prop-types';
import { Message } from './Notification.styled.jsx';

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: propTypes.string,
};
