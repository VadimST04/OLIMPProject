import React from "react";
import { useState } from "react";

const Checkbox = ({ label, checkCallback = () => {} }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked(!checked)}
      className="flex w-full items-center gap-2 px-3 pt-2 hover:bg-[#E5E5E5]"
    >
      <input
        type="checkbox"
        className="h-4 w-4 accent-main-green"
        checked={checked} // Добавили checked атрибут
      />
      <p className="capitalize">{label}</p>
    </div>
  );
};

export default Checkbox;
