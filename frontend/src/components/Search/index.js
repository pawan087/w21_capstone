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
        <div style={{ width: 400, marginBottom: 20 }}>
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
            styling={{
              height: "50px",
              border: "1px solid darkgrey",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              hoverBackgroundColor: "lightgrey",
              color: "black",
              fontSize: "12px",
              fontFamily: "Arial",
              iconColor: "grey",
              lineColor: "lightgrey",
              placeholderColor: "darkgrey",
              clearIconMargin: "3px 8px 0 0",
            }}
          />
        </div>
      </header>

      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}
