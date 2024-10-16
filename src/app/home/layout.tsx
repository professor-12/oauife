import React, { PropsWithChildren } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const HomeLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="min-h-screen bg-background flex w-full">
            {/* SIDEBAR */}
            <div className="w-1/6">
                <SideBar />
            </div>
            <div className="w-5/6">
                <Header />
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
};

export default HomeLayout;
