import React from 'react';
import './SubmitButton.css'

const SubmitButton = ({ onClick, isLoading }) => {
  return (
    <div className='centered'>
      <button onClick={onClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
};

export default SubmitButton;
