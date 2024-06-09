function App() {
  return (
    <>
      <div className="h-screen flex flex-col bg-[url('./assets/bg-masjid.jpg')] bg-cover  text-white gap-5 justify-center items-center">
        <div className="flex flex-col w-full justify-between items-center gap-3 absolute top-5">
          <div className="w-full flex justify-between px-[70px] text-[#e3e6e3]">
            <div>
              <div>Wednesday</div>
              <div>9 Juni 2024</div>
            </div>
            <div>Jakarta</div>
          </div>
          <form>
            <input type="text" placeholder="Search Prayer Time by City" className="w-[250px] py-2 px-4 rounded-full text-[14px] text-slate-400 outline-none focus:shadow-lg" />
            <input type="submit" value="" />
          </form>
        </div>
        <div>
          <ul className="w-[200px] bg-[#0d0d0d] flex flex-col rounded-xl py-2">
            <li className="odd:text-[#26a767] even:text-[#dbdbd9] flex justify-between p-2">
              <div>Fajr</div>
              <div className="font-bold">04:40</div>
            </li>
            <li className="odd:text-[#26a767] even:text-[#dbdbd9] flex justify-between p-2">
              <div>Fajr</div>
              <div className="font-bold">04:40</div>
            </li>
            <li className="odd:text-[#26a767] even:text-[#dbdbd9] flex justify-between p-2">
              <div>Fajr</div>
              <div className="font-bold">04:40</div>
            </li>
            <li className="odd:text-[#26a767] even:text-[#dbdbd9] flex justify-between p-2">
              <div>Fajr</div>
              <div className="font-bold">04:40</div>
            </li>
            <li className="odd:text-[#26a767] even:text-[#dbdbd9] flex justify-between p-2">
              <div>Fajr</div>
              <div className="font-bold">04:40</div>
            </li>
          </ul>
        </div>


      </div>
    </>
  );
}

export default App;
