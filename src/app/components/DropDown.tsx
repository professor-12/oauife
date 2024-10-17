"use client";
import Link from "next/link";
import React, { useState } from "react";
import BackDrop from "./BackDrop";

const DropDown = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return (
        <div className="cursor-pointer relative">
            <svg
                onClick={() => setToggleMenu(!toggleMenu)}
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="30px"
                width="30px"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
                    fill="currentColor"
                ></path>
                <path
                    d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z"
                    fill="currentColor"
                ></path>
                <path
                    d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
                    fill="currentColor"
                ></path>
                <path
                    d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
                    fill="currentColor"
                ></path>
                <path
                    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                    fill="currentColor"
                ></path>
                <path
                    d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
                    fill="currentColor"
                ></path>
                <path
                    d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z"
                    fill="currentColor"
                ></path>
                <path
                    d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
                    fill="currentColor"
                ></path>
                <path
                    d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"
                    fill="currentColor"
                ></path>
            </svg>

            {toggleMenu && (
                <>
                    <BackDrop onClick={() => setToggleMenu(false)} />
                    <div className="absolute top-[calc(100%+1rem)] flex flex-col justify-center items-center z-20 -translate-x-[50%] bg-white   shadow border rounded-xl min-h-[5rem]">
                        <ul className="p-3">
                            <div className="text-nowrap text-neutral-500 font-mono">
                                Contact us
                            </div>
                            <li className="p-2 hover:underline hover:text-blue-500">
                                <Link href={"mailto:enquiry@oauife.edu.ng"}>
                                    enquiry@oauife.edu.ng
                                </Link>
                            </li>
                            <li className="p-2 pt-0 group hover:underline hover:text-blue-500">
                                <Link href={"tel:+2348088014185"}>
                                    08088014185
                                </Link>
                            </li>
                        </ul>
                        <ul className="p-3 border-t">
                            <div className="text-nowrap  text-neutral-500 font-mono">
                                Time table
                            </div>
                            <li className="p-2 hover:underline hover:text-blue-500">
                                Lecture timetable
                            </li>
                            <li className="p-2 pt-0 hover:underline hover:text-blue-500">
                                Examination timetable
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default DropDown;
