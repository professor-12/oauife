import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="flex justify-between ring-b ring-blue-600 w-full h-[3.4rem] items-center bg-white px-8">
            <div className="tracking-widest text-lg">
                Obafemi Awolowo University
            </div>
            <div className="space-x-6">
                <Link href={"/"} className="text-lg font-medium text-slate-700">
                    Home
                </Link>
                <Link href={"/"} className="text-lg font-medium text-slate-700">
                    FAQ
                </Link>
                <Link href={"/"} className="text-lg font-medium text-slate-700">
                    Contact us
                </Link>
            </div>
        </div>
    );
};

export default Header;
