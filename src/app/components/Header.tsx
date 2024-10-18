import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";
import Image from "next/image";

const Header = () => {
    return (
        <div className="flex justify-between border-b  h-[3.4rem] items-center bg-white px-4 sm:px-8 sm:pr-24">
            <div className="tracking-widest lg:text-xl">
                <span className="max-sm:hidden">
                    Obafemi Awolowo University
                </span>
                <Link href={"/home"}>
                    <span className="sm:hidden text-3xl">
                        <Image
                            alt="Img"
                            src="/oaulogo.png"
                            width={40}
                            height={35}
                        />
                    </span>
                </Link>
            </div>
            <p className="text-xl sm:hidden">OAU</p>
            <div className="sm:hidden">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
                </svg>
            </div>
            <div className="space-x-6 max-sm:hidden">
                <DropDown />
            </div>
        </div>
    );
};

export default Header;
