import React from "react";

const Footer = () => {
  return (
    <div className="text-center mt-20 mb-3">
      Created with <span className="text-red-600"> ❤</span> by{" "}
      <a
        href="https://github.com/cuingskot76"
        className="hover:text-[#578FAE] cursor-pointer"
      >
        Afrizal. <br />
      </a>{" "}
      and special thanks to{" "}
      <a
        href="https://github.com/aldy505/jokes-bapak2"
        className="hover:text-[#578FAE] cursor-pointer"
      >
        reinaldyrafli
      </a>{" "}
      for the API
    </div>
  );
};

export default Footer;
