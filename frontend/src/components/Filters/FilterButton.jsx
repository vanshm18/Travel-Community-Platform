const FilterButton = ({ name, onClick, selected }) => {
  return (
    <button className={`px-4 py-2 border-b h-12 cursor-pointer shrink-0 ${selected ? "bg-gray-200" : "bg-white"}`}
      onClick={onClick}>
      {name}
    </button>
  );
};

export default FilterButton;