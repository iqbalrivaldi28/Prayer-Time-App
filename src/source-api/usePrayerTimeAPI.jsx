import React, { useEffect, useState } from 'react';

const usePrayerTimeAPI = (address) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://api.aladhan.com/v1/timingsByAddress?address=${address}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [address]);

  return data;
};

export default usePrayerTimeAPI;
