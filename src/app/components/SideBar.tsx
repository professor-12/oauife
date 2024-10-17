import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

const SideBar = () => {
    return (
        <div className="w-full max-sm:hidden border-r h-full bg-white pt-2 p-4">
            <Link href="/home" className="w-full">
                <div className="flex w-full justify-center items-center space-x-3">
                    <Image
                        src="/oaulogo.png"
                        alt="oau-logo"
                        width={50}
                        height={50}
                    />{" "}
                </div>
            </Link>
            <div className="py-[20px]">
                <NavLinks />
            </div>
        </div>
    );
};

export default SideBar;
