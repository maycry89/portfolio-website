import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-green-600"
    : "text-[#a5a5a5] border-slate-600 cursor-pointer hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-5 py-2
      `}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
