import React from 'react';

const LocationInfo = ({ weekday, date, location }) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
      <div className="mb-4 sm:mb-0">
        <div>{weekday}</div>
        <div>{date}</div>
      </div>
      <div>{location}</div>
    </div>
  );
};

export default LocationInfo;
