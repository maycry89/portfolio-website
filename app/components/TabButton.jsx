import React from "react";

const TabButton = ({ active, selectTab, tabName }) => {
  const buttonClasses = active
    ? "text-[#ADB7BE] border-b border-lime-600"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 hover:text-white ${buttonClasses}`}>{tabName}</p>
    </button>
  );
};

export default TabButton;
