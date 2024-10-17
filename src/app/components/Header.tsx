import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";

const Header = () => {
    return (
        <div className="flex justify-between border-b  h-[3.4rem] items-center bg-white px-8 pr-24">
            <div className="tracking-widest lg:text-xl">
                Obafemi Awolowo University
            </div>
            <div className="space-x-6 max-md:hidden">
                <DropDown />
            </div>
        </div>
    );
};

export default Header;
