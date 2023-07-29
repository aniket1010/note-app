import { MdSearch } from "react-icons/md";

const SearchBar = ({ setSearchText }) => {
  return (
    <div className="searchDiv">
      <div className="searchbar">
        <MdSearch size="2em" />
        <input
          onChange={(event) => setSearchText(event.target.value)}
          className="search"
          type="text"
          placeholder="Type to search..."
        />
      </div>
    </div>
  );
};
export default SearchBar;
