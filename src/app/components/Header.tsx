import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="flex justify-between border-b  h-[3.4rem] items-center bg-white px-8">
            <div className="tracking-widest lg:text-xl">
                Obafemi Awolowo University
            </div>
            <div className="space-x-6 max-md:hidden">
                <Link
                    href={"/"}
                    className="text-lg font-medium text-slate-700 font-[family-name:var(--font-geist-mono)]"
                >
                    Home
                </Link>
                <Link
                    href={"/"}
                    className="text-lg font-medium text-slate-700 font-[family-name:var(--font-geist-mono)]"
                >
                    FAQ
                </Link>
                <Link
                    href={"/"}
                    className="text-lg font-medium text-slate-700 font-[family-name:var(--font-geist-mono)]"
                >
                    Contact us
                </Link>
            </div>
        </div>
    );
};

export default Header;
