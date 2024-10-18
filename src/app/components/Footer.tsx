import React from "react";
import { links } from "./NavLinks";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex max-sm:flex-col max-sm:items-center gap-12 max-sm:text-center justify-between p-12">
            {links.map(({ children, name }) => {
                return (
                    <ul key={name} className="space-y-3">
                        <p className="font-semibold text-lg">{name}</p>
                        {children.map(({ link, name }) => {
                            return (
                                <li
                                    key={name}
                                    className="text-sm hover:text-blue-500"
                                >
                                    <Link href={link}>{name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                );
            })}
        </div>
    );
};

export default Footer;
