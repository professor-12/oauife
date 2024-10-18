import React from "react";
import Announcement from "../components/Announcement";
import SlideAnimation from "../components/SlideAnimation";
import { listofCArdContents } from "../lib/constants";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
};

const HomePage = () => {
    return (
        <div className="flex max-lg:flex-col gap-5">
            <div className="lg:w-4/5">
                <SlideAnimation />
                <div className="mt-4 w-full grid   gap-3 md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4">
                    {listofCArdContents.map(({ Svg, body, link }) => {
                        return (
                            <Link
                                href={link}
                                target="_blank"
                                key={body}
                                className="bg-white overflow-hidden relative cursor-pointer p-5 font-mono group rounded-xl leading-none"
                            >
                                {Svg}
                                <p className="text-xs group-hover:text-blue-600 font-medium lg:text-sm mt-4">
                                    {body}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="lg:w-2/5">
                <Announcement />
            </div>
        </div>
    );
};

export default HomePage;
