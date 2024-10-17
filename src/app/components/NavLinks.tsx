import React from "react";
import Link from "next/link";
export const links = [
    {
        name: "Student",
        children: [
            {
                name: "Undergraduate",
                link: "https://eportal.oauife.edu.ng/undergraduatetasks.php",
                svg: "",
            },
            {
                name: "Post graduate",
                link: "https://eportal.oauife.edu.ng/login.php",
                svg: "",
            },
            {
                name: "Executive MBA",
                link: "https://eportal.oauife.edu.ng/login.php",
                svg: "",
            },
        ],
    },
    {
        name: "Staff",
        children: [
            {
                name: "Staff login",
                link: "https://eportal.oauife.edu.ng/login.php",
                svg: "",
            },

            {
                name: "Bursary",
                link: "https://eportal.oauife.edu.ng/paymenttasks.php",
                svg: "",
            },
        ],
    },
    {
        name: "Other Links",
        children: [
            {
                name: "Newly admitted students",
                link: "https://eportal.oauife.edu.ng/login.php",
                svg: "",
            },
            {
                name: "PG starter form",
                link: "https://eportal.oauife.edu.ng/pgstarter00.php",
                svg: "",
            },
            {
                name: "Stalites",
                link: "https://eportal.oauife.edu.ng/login.php",
                svg: "",
            },
            {
                name: "Admission status",
                link: "https://eportal.oauife.edu.ng/admissions.php",
                svg: "",
            },
            {
                name: "Medical Services",
                link: "https://eportal.oauife.edu.ng/hrss_index.php",
                svg: "",
            },
            {
                name: "Computer Training",
                link: "https://eportal.oauife.edu.ng/ctpresult1.php",
                svg: "",
            },
        ],
    },
] as const;

const NavLinks = () => {
    return (
        <div className="flex flex-col gap-4">
            {links.map(({ name, children }) => {
                return (
                    <div className=" text-sm space-y-3" key={name}>
                        <p className="text-[#9da7b9] font-[family-name:var(--font-geist-mono)]">
                            {name}
                        </p>
                        <ul className="space-y-2">
                            {children.map(({ name, link }) => {
                                return (
                                    <Link href={link} key={name}>
                                        <li className="px-6 max-md:px-4 py-2 hover:bg-[#EAF3FF] cursor-pointer selection:pointer-events-none text-stone-700 rounded-lg">
                                            {name}
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default NavLinks;
