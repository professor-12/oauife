import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "E-portal - Obafemi Awolowo University"
};
export default function Home() {
    return (
        <div className="h-screen w-full fixed flex-col inset-0 flex items-center justify-center bg-slate-500">
            <div className="z-30 xl:text-6xl max-md:px-6 md:text-4xl text-3xl md:leading-loose  mx-auto text-blue-200 text-center font-bold">
                Welcome to OBAFEMI AWOLOWO UNIVERSITY ELECTRONIC PORTAL
            </div>
            <Link href={"/home"}>
                <button className="p-4 my-4  rounded-xl px-8 bg-blue-500 text-white text-lg">
                    Get Started
                </button>
            </Link>
            <video
                src="/1.mp4"
                muted
                autoPlay
                loop
                className="w-full -z-10 absolute h-full top-0   object-cover"
            ></video>
        </div>
    );
}
