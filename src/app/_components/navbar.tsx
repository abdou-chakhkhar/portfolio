import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-green-200 w-11/12 text-center m-auto grid grid-cols-3 ">
      <Image
        className="rounded-full "
        src="/abdou.jpg"
        alt="me"
        width="50"
        height="50"
      />
      <div className="m-auto">
        <a>About</a>
        <a>Work</a>
      </div>
      <div className="m-auto">Contact</div>
    </div>
  );
};

export default Navbar;
