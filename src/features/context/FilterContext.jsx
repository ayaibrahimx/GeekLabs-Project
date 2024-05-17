import React, { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [filterApplied, setFilterApplied] = useState('');
  const [closed, setIsClosed] = useState(true);

  console.log(isFilterClicked, 'isfilter');

  console.log(closed);

  return (
    <FilterContext.Provider
      value={{
        isFilterClicked,
        setIsFilterClicked,
        filterApplied,
        setFilterApplied,
        closed,
        setIsClosed,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
