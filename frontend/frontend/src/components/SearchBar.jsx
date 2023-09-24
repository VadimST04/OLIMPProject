import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="text-soft-black relative flex h-full w-full items-center">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className="hidden rounded-full px-3 py-1 pr-7 outline-none md:block bg-[#E8EDE7]"
      />
      <div className="text-[20px] md:absolute md:right-2">
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
