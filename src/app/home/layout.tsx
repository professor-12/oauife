import React, { PropsWithChildren } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const HomeLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="h-screen overflow-y-hidden bg-background flex w-full">
            {/* SIDEBAR */}
            <div className="lg:w-1/6 max-sm:hidden min-w-[12rem]">
                <SideBar />
            </div>
            <div className="lg:w-5/6 overflow-y-auto">
                <div className="sticky z-20 w-full top-0">
                    <Header />
                </div>
                <main className="p-3 sm:p-6">{children}</main>
                <div className="sm:hidden bg-white">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
