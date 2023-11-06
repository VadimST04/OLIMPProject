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
  defaultValue = "",
  inputStyling = "",
}) => {
  searchItems = [...new Set(searchItems)];

  const [searchValue, setSearchValue] = useState(defaultValue);
  const [visibleItems, setVisibleItems] = useState(false);
  const [filteredItems, setFilteredItems] = useState(searchItems);
  const selfRef = useRef();

  const onClickOutside = (e) => {
    if (selfRef.current && !selfRef.current.contains(e.target)) {
      setVisibleItems(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  useEffect(() => {
    setSearchValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setFilteredItems(
      searchValue.length === 0
        ? searchItems
        : searchItems.filter((str) =>
            str.toLowerCase().includes(searchValue.toLowerCase()),
          ),
    );
  }, [searchValue]);

  const onItemClick = (item) => {
    submitCallback(item);
    setSearchValue(clearOnSubmit ? "" : item);
    setVisibleItems(false);
  };

  return (
    <div className={`relative flex w-full items-center`} ref={selfRef}>
      <input
        placeholder={placeholder}
        value={searchValue}
        onFocusCapture={() => {
          setVisibleItems(true);
        }}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        type="text"
        className={inputStyling}
        onSubmit={(e) => submitCallback(searchValue)}
      />
      <div className={`absolute right-1 text-[18px]`}>
        {searchValue === "" && <BiSearch />}
        {searchValue !== "" && (
          <RxCross1
            onClick={() => {
              setSearchValue("");
              setVisibleItems(false);
            }}
            className="cursor-pointer"
          />
        )}
      </div>
      {setVisibleItems !== "" && (
        <div
          className={`absolute left-0 top-[calc(100%+5px)] z-10 min-w-full overflow-y-auto rounded-md border-2 border-main-green bg-soft-white dark:bg-soft-black ${maxHeight} ${
            visibleItems ? "" : "hidden"
          }`}
        >
          {filteredItems
            .filter((item) => !exceptItems.includes(item))
            .map((item) => (
              <div
                key={item}
                onClick={() => onItemClick(item)}
                className="cursor-pointer p-1 text-soft-black hover:bg-soft-white-hover dark:text-soft-white dark:hover:bg-soft-black-hover"
              >
                {item}
              </div>
            ))}
          {!filteredItems.length && (
            <div className="invisible cursor-pointer p-1 hover:bg-soft-white-hover dark:hover:bg-soft-black-hover">
              empty
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
