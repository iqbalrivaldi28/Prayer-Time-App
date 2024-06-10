import React, { useState } from 'react';

const SearchForm = ({onSubmit}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search Prayer Time by City" className="w-full py-2 px-4 rounded-full text-[14px] text-slate-400 outline-none focus:shadow-lg" />
      <input type="submit" value="" className="hidden" />
    </form>
  );
};

export default SearchForm;
