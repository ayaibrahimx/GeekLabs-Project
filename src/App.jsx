import Header from './features/header/Header';
import Stock from './features/main/Stock';
import Side from './features/sideMenu/Side';
import Filter from './features/filters/Filter';
import { FilterContextProvider } from './features/context/FilterContext';
import { SearchProvider } from './features/context/SearchContext';

function App() {
  return (
    <FilterContextProvider>
      <SearchProvider>
        <div className=" flex h-dvh w-full   flex-row   overflow-auto  bg-bg font-poppins">
          <div className="flex h-full">
            <Side />
            <div className="full-width  sticky ml-20 flex-col  md:w-[25rem] lg:w-[30rem] xl:w-[50rem] 2xl:w-[65rem] ">
              <Header />
              <Stock />
            </div>
            <Filter />
          </div>
        </div>
      </SearchProvider>
    </FilterContextProvider>
  );
}

export default App;
