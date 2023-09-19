import React, { useState, useRef, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

const DropdownButton = ({ title, options }) => {
  const [active, setActive] = useState(false);
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      onClick={() => {
        setActive(!active);
      }}
      className="relative">
      <div className="bg-red-400 py-1 px-3 rounded-md flex items-center justify-center gap-2 text-gray-800 cursor-pointer hover:brightness-110 transition-all duration-150 select-none">
        <p>{title}</p>
        <BsChevronDown />
      </div>
      {active && (
        <div className="absolute left-0 top-9 flex flex-col bg-[#DE767A] rounded-md select-none flex-shrink-0 min-w-full transition-all duration-500">
          {options.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="bg-[#DE767A] p-2 hover:brightness-110 rounded-md truncate">
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
