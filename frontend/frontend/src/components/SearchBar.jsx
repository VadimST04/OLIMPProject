import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const SearchBar = ({
  searchItems,
  submitCallback,
  placeholder = "Search",
  maxHeight = "max-h-72",
  clearOnSubmit = false,
}) => {
  searchItems = [...new Set(searchItems)]; // leaving unique items only
  const [searchValue, setSearchValue] = useState("");
  const [visibleItems, setVisibleItems] = useState(false);
  const itemsVisibility = visibleItems ? "" : "hidden";
  const textSize = "text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]";
  return (
    <div
      className={`relative flex w-full items-center text-soft-black ${textSize}`}
    >
      <input
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          setVisibleItems(true);
        }}
        type="text"
        className="h-full w-full rounded-md border bg-soft-white py-2 pl-3 pr-5 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green"
        onSubmit={(e) => submitCallback(searchValue)}
      />
      <div className={`absolute right-1 text-[18px]`}>
        {searchValue === "" && <BiSearch />}
        {searchValue !== "" && (
          <RxCross1
            onClick={() => setSearchValue("")}
            className="cursor-pointer"
          />
        )}
      </div>
      {searchValue !== "" && (
        <div
          className={`absolute left-0 top-9 z-10 min-w-full overflow-y-auto rounded-md bg-white-green ${maxHeight} ${itemsVisibility}`}
        >
          {searchItems
            .filter((str) =>
              str.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map((item) => (
              <div
                key={item}
                onClick={() => {
                  submitCallback(item);
                  setSearchValue(clearOnSubmit ? "" : item);
                  setVisibleItems(false);
                }}
                className="cursor-pointer p-1 hover:bg-[#D5D9D4]"
              >
                {item}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
