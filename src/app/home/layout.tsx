import React, { PropsWithChildren } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const HomeLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="h-screen overflow-y-hidden bg-background flex w-full">
            {/* SIDEBAR */}
            <div className="lg:w-1/6">
                <SideBar />
            </div>

            <div className="lg:w-5/6 overflow-y-auto">
                <div className="sticky z-20 w-full top-0">
                    <Header />
                </div>
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
};

export default HomeLayout;
