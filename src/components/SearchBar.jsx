import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="search">Image Search</label>
          <input
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
            id="search"
            type="search"
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
