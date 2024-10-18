import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";
import Image from "next/image";
import SmallScreenHeader from "./SmallScreenHeader";

const Header = () => {
    return (
        <div className="flex z-20  justify-between border-b  h-[3.4rem] items-center bg-white px-4 sm:px-8 sm:pr-24">
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
            <SmallScreenHeader />
            <div className="space-x-6 max-sm:hidden">
                <DropDown />
            </div>

            {/* Small Screen Header */}
        </div>
    );
};

export default Header;
