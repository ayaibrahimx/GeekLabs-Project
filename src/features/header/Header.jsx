import Search from '../../ui/Search';
import { HiMiniBellAlert } from 'react-icons/hi2';
import { useFilter } from '../context/FilterContext';
import { FaSearch } from 'react-icons/fa';

import FilterBtn from '../filters/FilterBtn';

function Header() {
  const { setIsFilterClicked, isFilterClicked, setIsClosed, closed } =
    useFilter();
  return (
    <>
      <div
        className=" sticky top-0 z-50
     mt-7  flex 
       border-none
      bg-bg px-4 py-3   font-bold text-white sm:p-3"
      >
        <span className=" border border-b-0 border-l-[5px] border-r-0 border-t-0 border-l-lblue pl-4  text-5xl font-bold max-md:text-3xl">
          ALERTS
        </span>
        <span className="max-md:hidden">
          <Search />
        </span>
        <span className="my-auto md:hidden">
          <FaSearch className="mx-2  h-5 w-5   " />
        </span>
        <HiMiniBellAlert className="my-auto ml-1 h-8 w-8  text-lblue max-[880px]:hidden " />
        <span className="absolute right-2 top-3 h-4 w-4 rounded-full bg-green-700 p-1 text-xs max-[880px]:hidden">
          <span className="absolute right-1 top-0 max-[880px]:hidden">6</span>
        </span>
        <button
          className="my-auto ml-2 rounded-md bg-lblue px-4 py-1 align-middle text-sm md:hidden"
          onClick={() => {
            setIsFilterClicked(!isFilterClicked);
            setIsClosed(!closed);
          }}
        >
          Filter
        </button>
        <span className="md:hidden">{isFilterClicked && <FilterBtn />}</span>
      </div>
    </>
  );
}

export default Header;
