import { useState } from "react";

const QtyCounter = () => {
  const [value, setValue] = useState(1);

  const addToCounter = () => {
    setValue(value + 1);
  };

  const subtractToCounter = () => {
    value >= 1 && setValue(value - 1);
  };

  return (
    <div className="flex w-14 h-7 p-1 items-center rounded-full">
      {value === 1 ? (
        <button className="tbDisabled">-</button>
      ) : (
        <button onClick={subtractToCounter}>-</button>
      )}
      <p
        className="qtyInputOnCart w-full text-center text-sm h-min focus-visible:outline-none"
      >
        {value}
      </p>
      <button onClick={addToCounter}>+</button>
    </div>
  );
};

export default QtyCounter;
