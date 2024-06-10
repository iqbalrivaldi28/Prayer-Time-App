import { useState } from 'react';
import usePrayerTimeAPI from './source-api/usePrayerTimeAPI';
import LocationInfo from './components/LocationInfo';
import SearchForm from './components/SearchForm';
import PrayerTimesList from './components/PrayerTimesList';

function App() {
  const [term, setTerm] = useState('Jakarta');
  const data = usePrayerTimeAPI(term);

  const prayerTime = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  const handleSearchSubmit = (input) => {
    setTerm(input);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[url('./assets/bg-masjid.jpg')] bg-cover  text-white gap-5 justify-center items-center">
        <div className="flex flex-col w-full justify-between items-center gap-3 absolute top-5">
          <LocationInfo weekday={data.date && data.date.gregorian.weekday.en} date={data.date && data.date.readable} location={term} />
          <SearchForm onSubmit={handleSearchSubmit} />
        </div>
        <PrayerTimesList data={data} prayerTime={prayerTime} />
      </div>
    </>
  );
}

export default App;
