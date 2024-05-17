import { IoMdArrowDropdown } from 'react-icons/io';

function DropdownButton({
  setShowMenuIndustry,
  setShowMenuMarketCap,
  setShowMenuRisk,
  filterType,
}) {
  const handleClick = () => {
    if (filterType == 2)
      setShowMenuMarketCap((previousState) => !previousState);
    else if (filterType == 1)
      setShowMenuIndustry((previousState) => !previousState);
    else if (filterType == 3)
      setShowMenuRisk((previousState) => !previousState);
  };

  return (
    <button
      onClick={handleClick}
      className={`${filterType == 1 && 'relative bottom-[-6px]'}`}
    >
      <IoMdArrowDropdown className="text-white" />
    </button>
  );
}

export default DropdownButton;
