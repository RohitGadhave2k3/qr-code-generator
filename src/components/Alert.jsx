// src/components/Alert.js
import React from 'react';

const Alert = ({ message }) => {
  return message ? <div className="mt-2 mb-1">{message}</div> : null;
};

export default Alert;
