import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative flex h-full w-full items-center">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className="rounded-full px-3 py-1 pr-7 outline-none hidden md:block"
      />
      <div className="md:absolute md:right-2 text-[20px]">
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
