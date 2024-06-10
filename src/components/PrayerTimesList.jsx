import React from 'react';

const PrayerTimeItem = ({ time, timing }) => {
  return (
    <li className="odd:text-[#26a767] even:text-[#0d0d0d] font-bold flex justify-between p-2">
      <div className="text-[25px]">{time}</div>
      <div className="font-bold text-[25px] ">{timing}</div>
    </li>
  );
};

const PrayerTimesList = ({ data, prayerTime }) => {
  return (
    <ul className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl bg-white bg-opacity-70 flex flex-col rounded-xl py-4 px-4">
      {data && data.timings && prayerTime.map((p, index) => <PrayerTimeItem key={index} time={p} timing={data.timings[p]} />)}
    </ul>
  );
};

export default PrayerTimesList;
