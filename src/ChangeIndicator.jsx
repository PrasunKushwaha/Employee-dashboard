import React from 'react';

const ChangeIndicator = ({ change }) => {
  const isPositive = change.includes('+');
  return (
    <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
      {isPositive ? (
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 10l5-5 5 5H5z" />
        </svg>
      ) : (
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M15 10l-5 5-5-5h10z" />
        </svg>
      )}
      {change}
    </div>
  );
};

export default ChangeIndicator;
