function FilteredValues({ filter, handleRemove }) {
  return (
    <>
      <p className="float-left m-1  w-fit rounded-md bg-lblue px-1 text-xs  font-[300] text-black">
        {filter}{' '}
        <button className="" onClick={() => handleRemove(filter)}>
          {' '}
          &times;
        </button>
      </p>
    </>
  );
}

export default FilteredValues;
