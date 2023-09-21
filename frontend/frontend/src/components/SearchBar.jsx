import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex items-center w-full h-full relative">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className="rounded-full py-1 px-3 pr-7 outline-none"
      />
      <div className="text-[20px] absolute right-2">
        {searchValue === "" && <BiSearch />}
        {searchValue !== "" && (
          <RxCross1
            className="cursor-pointer"
            onClick={() => {
              setSearchValue("");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
