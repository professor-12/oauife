import React from "react";

const Announcement = () => {
    return (
        <div className="bg-white shadow  space-y-4 p-4 px-5 rounded-xl ">
            <div className="flex gap-2 items-center lg:text-xl font-semibold">
                <h2>Announcement</h2>
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="none"
                        stroke-width="2"
                        d="M11,15 C14,15 19,19 19,19 L19,3 C19,3 14,7 11,7 C11,7 11,15 11,15 Z M5,15 L8,23 L12,23 L9,15 M19,14 C20.657,14 22,12.657 22,11 C22,9.343 20.657,8 19,8 M11,19 C11.9999997,18.9999994 14,18 14,16 M2,11 C2,7.88888889 3.7912,7 6,7 L11,7 L11,15 L6,15 C3.7912,15 2,14.1111111 2,11 Z"
                    ></path>
                </svg>
            </div>
            <ul className="space-y-4">
                <li className="text-gray-600 max-lg:text-xs lg:leading-5 border-b border-slate-300 pb-4 font-[family-name:var(--font-geist-sans)]">
                    <span className="block max-lg:text-sm text-black mb-2">
                        2022/2023 Batch B Direct-Entry Freshers&apos; Payment of
                        Relevant Fees and Bedspace Request in the University
                        Hostels
                    </span>{" "}
                    Payment of relevant fees and balloting for accommodation for
                    newly admitted Batch &quot;B`&quot; Direct Entry Students is
                    scheduled to take
                </li>
                <li className="text-gray-600 max-lg:text-xs  lg:leading-5 pb-4 font-[family-name:var(--font-geist-sans)]">
                    <span className="block max-lg:text-sm  text-black mb-2">
                        ONLINE CONVOCATION REGISTRATION AND PAYMENT
                    </span>{" "}
                    All graduating students are required to register and pay
                    online for convocation{" "}
                    <span className="text-blue-500 cursor-pointer ">
                        <a href="https://eportal.oauife.edu.ng/grad_login.php">
                            Click to start
                        </a>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Announcement;
