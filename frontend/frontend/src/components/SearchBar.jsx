import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const SearchBar = ({
  searchItems,
  submitCallback,
  placeholder = "Search",
  maxHeight = "max-h-72",
  clearOnSubmit = false,
  exceptItems = [],
}) => {
  searchItems = [...new Set(searchItems)].filter(
    (item) => !exceptItems.includes(item),
  );
  const [searchValue, setSearchValue] = useState("");
  const [visibleItems, setVisibleItems] = useState(false);
  const itemsVisibility = visibleItems ? "" : "hidden";
  const textSize = "text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]";
  const [filteredItems, setFilteredItems] = useState(searchItems);
  const selfRef = useRef();

  const clickOutside = useEffect(() => {
    const handleClickOutside = (e) => {
      if (selfRef.current && !selfRef.current.contains(e.target)) {
        setVisibleItems(false);
        if (clearOnSubmit) setSearchValue("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selfRef]);

  return (
    <div
      className={`relative flex w-full items-center text-soft-black ${textSize}`}
      ref={selfRef}
    >
      <input
        placeholder={placeholder}
        value={searchValue}
        onFocusCapture={() => {
          setVisibleItems(true);
        }}
        onChange={(e) => {
          setSearchValue(e.target.value);
          setFilteredItems(
            searchValue.length === 0
              ? searchItems
              : searchItems.filter((str) =>
                  str.toLowerCase().includes(searchValue.toLowerCase()),
                ),
          );
        }}
        type="text"
        className="h-full w-full rounded-md border-2 border-main-green bg-soft-white py-2 pl-3 pr-5 outline-none hover:border-main-dark-green"
        onSubmit={(e) => submitCallback(searchValue)}
      />
      <div className={`absolute right-1 text-[18px]`}>
        {searchValue === "" && <BiSearch />}
        {searchValue !== "" && (
          <RxCross1
            onClick={() => {
              setSearchValue("");
              setVisibleItems(false);
              setFilteredItems(searchItems);
            }}
            className="cursor-pointer"
          />
        )}
      </div>
      {setVisibleItems !== "" && (
        <div
          className={`absolute left-0 top-9 z-10 min-w-full overflow-y-auto rounded-md bg-white-green ${maxHeight} ${itemsVisibility}`}
        >
          {filteredItems
            .filter((item) => !exceptItems.includes(item))
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
