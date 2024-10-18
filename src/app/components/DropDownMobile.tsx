"use client";
import Link from "next/link";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const DropDownMobile = ({ name, child }: { name: string; child: any[] }) => {
    const [expand, setExpand] = useState(false);
    return (
        <div className="border-b">
            <div
                onClick={() => setExpand(!expand)}
                className="py-4 cursor-pointer flex px-5 items-center justify-between     w-full"
            >
                <p className="font-mono text-lg font-medium">{name}</p>
                <svg
                    className={`${expand && "rotate-180"}`}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m342.43 238.23-74.13 89.09a16 16 0 0 1-24.6 0l-74.13-89.09A16 16 0 0 1 181.86 212h148.28a16 16 0 0 1 12.29 26.23z"></path>
                    <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                    ></path>
                </svg>
            </div>
            {expand && (
                <ul className="p-3  px-6 space-y-5">
                    {child?.map(({ name, link }) => {
                        return (
                            <li
                                key={name}
                                className="text-neutral-700 flex gap-2 hover:text-blue-500"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    height="1.3em"
                                    width="1.3em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="Link">
                                        <g>
                                            <path d="M10.9,8a4.055,4.055,0,0,1,1.352.135,2.511,2.511,0,0,1-.7,4.863.5.5,0,0,0,0,1,3.508,3.508,0,0,0,2.944-5.2A3.557,3.557,0,0,0,11.434,7H5.59A3.5,3.5,0,0,0,5.4,14c.724.041,1.458,0,2.183,0a.5.5,0,0,0,0-1h0c-1.323,0-2.915.262-3.891-.843A2.522,2.522,0,0,1,5.59,8Z"></path>
                                            <path d="M18.41,17a3.5,3.5,0,0,0,.192-6.994c-.724-.041-1.458,0-2.183,0a.5.5,0,0,0,0,1h0c1.323,0,2.915-.262,3.891.843A2.522,2.522,0,0,1,18.41,16H13.1a4.055,4.055,0,0,1-1.352-.135,2.511,2.511,0,0,1,.7-4.863.5.5,0,0,0,0-1,3.508,3.508,0,0,0-2.944,5.2A3.557,3.557,0,0,0,12.566,17Z"></path>
                                        </g>
                                    </g>
                                </svg>
                                <Link href={link}>{name}</Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default DropDownMobile;
