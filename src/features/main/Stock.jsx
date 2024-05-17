import { useFilter } from '../context/FilterContext';
import { useSearch } from '../context/SearchContext';
import StockList from './StockList';
const stock = [
  {
    name: 'AMZN',
    price: 200,
    color: 'red',
    id: 1,
    risk: 'Low',
  },
  {
    name: 'TSLA',
    price: 200,
    color: 'green',
    id: 2,
    risk: 'High',
  },
  {
    name: 'ABQQ',
    price: 200,
    color: 'green',
    id: 3,
    risk: 'High',
  },
  {
    name: 'MSFT',
    price: 200,
    color: 'red',
    id: 4,
    risk: 'Low',
  },
  {
    name: 'PYPL',
    price: 200,
    color: 'green',
    id: 5,
    risk: 'Low',
  },
  {
    name: 'NFLX',
    price: 200,
    color: 'red',
    id: 6,
    risk: 'Low',
  },
  {
    name: 'NFLX',
    price: 200,
    color: 'red',
    id: 7,
    risk: 'Low',
  },
  {
    name: 'NFLX',
    price: 200,
    color: 'red',
    id: 8,
    risk: 'Low',
  },
  {
    name: 'NFLX',
    price: 200,
    color: 'red',
    id: 9,
    risk: 'Low',
  },
  {
    name: 'NFLX',
    price: 200,
    color: 'red',
    id: 10,
    risk: 'Low',
  },
];

function Stock() {
  const { search } = useSearch();
  const { filterApplied, isFilterClicked, closed } = useFilter();

  const appliedFilter = stock.filter(
    (stock) => stock.risk.toLowerCase() === filterApplied.toLowerCase(),
  );

  const searchedValue =
    appliedFilter.length !== 0 || filterApplied === 'Mid'
      ? appliedFilter.filter((stock) =>
          stock.name.toLowerCase().includes(search.toLowerCase()),
        )
      : stock.filter((stock) =>
          stock.name.toLowerCase().includes(search.toLowerCase()),
        );

  return (
    <>
      <ul
        className={`mx-auto   w-[100%]  justify-between   rounded-md  py-2 text-white  ${isFilterClicked ? 'max-md:opacity-40 max-md:blur-sm' : ''} ${closed ? 'opacity-100 blur-none' : ''}`}
      >
        {searchedValue.map((stocks) => (
          <StockList stock={stocks} key={stocks.id}>
            <div className="m-2 mt-0 w-full   rounded-b-lg bg-sidebg  font-[300]   lg:w-[29rem] xl:w-[49rem] 2xl:w-[64rem] ">
              <div className="mx-auto w-[80%] pt-5">
                <span className="font-semibold">${stocks.name}</span> just
                announced an acquisition of $NFLX at $200 B.
                <p className="w-full  pb-5 pt-3 text-sm">
                  This is an
                  <span className="text-lblue underline">
                    {' '}
                    arbitrage opportunity
                  </span>
                  , with the max gain being %X if the deal closes, but the
                  possible risk is %Y if the deal fails, if the deal success is
                  % and therefore the recommended play is{' '}
                  <span className="text-lblue underline">long/short</span> $ABC
                </p>
              </div>
            </div>
          </StockList>
        ))}
      </ul>
    </>
  );
}

export default Stock;
