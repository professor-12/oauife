import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Not found",
};
const NotFoundPage = () => {
    return (
        <div className="h-screen flex items-center justify-center w-full">
            <div className="absolute flex gap-4 items-center top-4 left-12">
                <Image
                    src="/oaulogo.png"
                    width={50}
                    height={50}
                    alt="oau-logo"
                />
                <span className="tracking-widest text-lg">
                    Obafemi awolowo university.
                </span>
            </div>
            <div>
                <div className="relative w-[18rem] h-[18rem]">
                    <Image
                        src="/svg/undraw_page_not_found_re_e9o6 (1).svg"
                        fill
                        alt="not found image"
                    />
                </div>
                <p className="text-center font-mono">
                    This page could not be found.
                </p>
                <Link href={"/home"}>
                    <p className="text-center py-3 hover:underline hover:text-blue-500 font-mono">
                        Return to the home page
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
