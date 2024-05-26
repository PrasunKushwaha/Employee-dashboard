
import React from 'react';

const TriangleIcon = ({ direction }) => {
  const isUp = direction === 'up';
  return (
    <svg
      className={`w-4 h-4 ${isUp ? 'text-green-500' : 'text-red-500'} mr-1`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isUp ? (
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 01.7.29l7 7a1 1 0 11-1.4 1.42L10 5.41l-6.3 6.3a1 1 0 01-1.4-1.42l7-7A1 1 0 0110 3z"
          clipRule="evenodd"
        />
      ) : (
        <path
          fillRule="evenodd"
          d="M10 17a1 1 0 01-.7-.29l-7-7a1 1 0 111.4-1.42L10 14.59l6.3-6.3a1 1 0 111.4 1.42l-7 7A1 1 0 0110 17z"
          clipRule="evenodd"
        />
      )}
    </svg>
  );
};

export default TriangleIcon;
