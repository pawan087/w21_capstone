import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export default function SearchComponent({ products }) {
  const history = useHistory();
  const [criteria, setCriteria] = useState("");
  const handleOnSearch = (string, results) => {
    // console.log(string, results);
    setCriteria(string);
  };

  const handleOnHover = (result) => {
    // console.log(result);
  };

  const handleOnSelect = (item) => {
    // console.log(item);

    setCriteria(item.name);
  };

  const handleOnFocus = () => {
    // console.log("Focused");
  };

  const handleOnClear = () => {
    // console.log("Cleared");
  };

  const handleSubmit = () => {
    const searchCriteria = criteria.split(" ").join("_").toLowerCase();

    history.push(`/search/${searchCriteria}`);

    setCriteria("");
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ReactSearchAutocomplete
            onKeyPres={handleKeypress}
            items={products}
            fuseOptions={{ keys: ["name", "description"] }} // Search on both fields
            resultStringKeyName="name" // String to display in the results
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            showIcon={true}
            placeholder='Search games, consoles and more'
            styling={{
              height: "45px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "rgb(240,240,240)",
              boxShadow: "none",
              hoverBackgroundColor: "white",
              color: "rgb(51,51,51)",
              fontSize: "14px",
              fontFamily: "Arial",
              iconColor: "rgb(51,51,51)",
              lineColor: "white",
              placeholderColor: "rgb(51,51,51)",
              clearIconMargin: "3px 8px 0 0",
              boxShadow: "200px"
            }}
          />
        </div>
      </header>

      {false && <button onClick={handleSubmit}>Search</button>}
    </div>
  );
}
