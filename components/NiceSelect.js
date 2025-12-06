"use client";
import { useState } from "react";

const NiceSelect = ({
  option = [
    { id: 1, name: "Price", value: "price-1" },
    { id: 2, name: "Price", value: "price-2" },
    { id: 3, name: "Price", value: "price-3" },
    { id: 4, name: "Price", value: "price-4" },
  ],
  className = "",
}) => {
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState(option[0]);
  return (
    <div
      className={`nice-select ${className} ${toggle ? "open" : ""}`}
      onClick={() => setToggle(!toggle)}
    >
      <span className="current">{select.name}</span>
      <ul className="list">
        {option.map((op) => (
          <li
            key={op.id}
            data-value={op.value}
            className={`option ${op.id === select.id ? "selected" : ""}`}
            onClick={() => {
              setSelect(op);
              setToggle(false);
            }}
          >
            {op.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NiceSelect;
