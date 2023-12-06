import React, { useEffect } from "react";
import { useState } from "react";

const Checkbox = ({ label, checkedByDefault = false, checkCallback }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(checkedByDefault);
  }, [checkedByDefault]);

  return (
    <div
      onClick={() => {
        checkCallback(label, !checked);
        setChecked(!checked);
      }}
      className="flex items-center gap-2 p-1 px-3 hover:bg-[#E5E5E5]"
    >
      <input
        type="checkbox"
        className="h-4 w-4 cursor-pointer accent-main-green"
        checked={checked}
        readOnly
      />
      <p className="capitalize">{label}</p>
    </div>
  );
};

export default Checkbox;
