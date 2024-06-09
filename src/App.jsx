import { useEffect, useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [term, setTerm] = useState('Jakarta');
  const [data, setData] = useState({});

  const prayerTime = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  useEffect(() => {
    fetch(`http://api.aladhan.com/v1/timingsByAddress?address=${term}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [term]);

  return (
    <>
      <div className="h-screen flex flex-col bg-[url('./assets/bg-masjid.jpg')] bg-cover  text-white gap-5 justify-center items-center">
        <div className="flex flex-col w-full justify-between items-center gap-3 absolute top-5">
          <div className="w-full flex justify-between px-[70px] text-[#e3e6e3]">
            <div>
              <div>{data.date && data.date.gregorian.weekday.en}</div>
              <div>{data.date && data.date.readable}</div>
            </div>
            <div>{term}</div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setTerm(input);
              setInput('');
            }}
          >
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search Prayer Time by City" className="w-[250px] py-2 px-4 rounded-full text-[14px] text-slate-400 outline-none focus:shadow-lg" />
            <input type="submit" value="" />
          </form>
        </div>
        <div>
          <ul className="w-[400px] bg-[#0d0d0d] flex flex-col rounded-xl py-4 px-4">
            {data && data.timings && prayerTime.map((p) => {
                return (
                  <li className="odd:text-[#26a767] even:text-[#dbdbd9] flex justify-between p-2">
                    <div className='text-[25px]'>{p}</div>
                    <div className="font-bold text-[25px]">{data.timings[p]}</div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
