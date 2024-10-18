import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

const SideBar = () => {
    return (
        <div className="w-full max-sm:hidden border-r  h-screen bg-white pt-2 p-4 max-sm:pr-0">
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
            <div className="py-[20px] sm:pb-12  h-full overflow-auto">
                <NavLinks />
            </div>
        </div>
    );
};

export default SideBar;
