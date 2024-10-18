"use client";
import React, { useState } from "react";
import { links } from "./NavLinks";
import DropDownMobile from "./DropDownMobile";

const SmallScreenHeader = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <div className="sm:hidden">
            <svg
                onClick={() => setShowDropDown(!showDropDown)}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                className="cursor-pointer"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>

            <div
                className={`${
                    !showDropDown ? "-translate-y-[100%]" : "top-[3.6rem]"
                } fixed py-5 first:border-t  w-full inset-0 transition-all duration-400  z-10 bg-white`}
            >
                {links.map(({ name, children }) => {
                    return (
                        <DropDownMobile
                            key={name}
                            name={name}
                            child={[...children]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SmallScreenHeader;
