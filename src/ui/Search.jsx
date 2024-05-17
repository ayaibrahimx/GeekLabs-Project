import { useSearch } from '../features/context/SearchContext';

function Search() {
  const { setSearch } = useSearch();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="my-auto ml-5 ">
      <input
        placeholder="Search By..."
        type="search"
        className="   full-width-search h-[38px]
        
         rounded-md bg-lgray  p-4 text-sm font-semibold placeholder-white md:w-[9rem] lg:w-[14rem]  xl:w-[33rem] 2xl:w-[48rem]"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
