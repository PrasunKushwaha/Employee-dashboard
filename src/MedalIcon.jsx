import React from 'react';

const MedalIcon = ({ rank }) => {
  let color = '';
  switch (rank) {
    case 1:
      color = 'text-yellow-500';
      break;
    case 2:
      color = 'text-gray-400';
      break;
    case 3:
      color = 'text-yellow-700';
      break;
    default:
      color = 'text-gray-500';
  }

  return (
    <svg className={`w-4 h-4 ${color}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 15l-5.5 3 1-5.5L1 8.5l5.5-.5L10 3l2.5 5 5.5.5-4.5 4 1 5.5L10 15z" />
    </svg>
  );
};

export default MedalIcon;
