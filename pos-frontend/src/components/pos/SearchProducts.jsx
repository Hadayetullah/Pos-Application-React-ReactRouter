import React, { useEffect, useState } from "react";

const SearchProducts = ({ data, handleSelectData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [filteredOptions, setFilteredOptions] = useState([]);

  // const handleSelect = option => {
  //   handleSelectData(option);
  //   setSearchQuery('');
  //   setFilteredOptions([]);
  // };

  const handelSearch = (value) => {
    setSearchQuery(value);
    // const productSearchResults = [];
    // for(let x in data) {
    //     let changeCaseSensitivity = data[x].productTitle.toLowerCase();
    //     if(value.trim() === ""){
    //         break;
    //     }
    //     else if(changeCaseSensitivity.includes(value.trim().toLowerCase())){
    //         productSearchResults.push(data[x]);
    //     }
    // }

    // setFilteredOptions(productSearchResults);
  };

  return (
    <div className="dropdown__search relative inline-block w-[80%]">
      <input
        type="text"
        value={searchQuery}
        // onChange={e => setSearchQuery(e.target.value)}
        onChange={(e) => handelSearch(e.target.value)}
        placeholder="Search Products..."
        className="text-[20px] float-left border-0 bg-transparent outline-0 w-[80%] resize-none placeholder-[#999] focus:outline-none"
      />
      {/* <div className="dropdown__product__search">
          {filteredOptions.map((option, i) => (
            <div
              key={i}
              className="dropdown__product__item"
              onClick={() => handleSelect(option)}
            >
              {option.productTitle}
            </div>
          ))}
        </div> */}
    </div>
  );
};

export default SearchProducts;
