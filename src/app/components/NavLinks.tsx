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
            { name: "Post graduate", link: "", svg: "" },
            { name: "Executive MBA", link: "", svg: "" },
        ],
    },
    {
        name: "Staff",
        children: [
            { name: "Undergraduate", link: "", svg: "" },
            { name: "Post graduate", link: "", svg: "" },
            { name: "Executive MBA", link: "", svg: "" },
        ],
    },
    {
        name: "Undergraduate",
        children: [
            { name: "Undergraduate", link: "", svg: "" },
            { name: "Post graduate", link: "", svg: "" },
            { name: "Executive MBA", link: "", svg: "" },
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
