import React from "react";

const CardLayout = ({ children, disabled }) => {
  return (
    <button className="group disabled:opacity-40" disabled={disabled}>
      <div className="p-4 border border-[#CED2D9] group-active:border-[#155C93] group-disabled:active:border-[#CED2D9]">{children}</div>
      <div className="h-1 bg-[#CED2D9] group-hover:bg-[#2670A9] group-disabled:bg-[#CED2D9]" />
    </button>
  );
};

export default CardLayout;
