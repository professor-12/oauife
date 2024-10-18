"use client";
import React, { useEffect, useState } from "react";

const SlideAnimation = () => {
    const [slideToRight, setSlideToRight] = useState(true);
    const x = slideToRight ? 0 : 100;
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideToRight((pre) => !pre);
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    console.log(slideToRight);
    return (
        <div className="bg-white overflow-clip rounded-lg h-[18rem]">
            <div
                style={{ transform: `translateX(-${x}%)` }}
                className="flex  duration-1000 transition-all w-full h-full  "
            >
                <div
                    style={{
                        background: 'url("/slide1.jpg")',
                    }}
                    className="w-full bg-no-repeat bg-cover relative  h-full flex-shrink-0"
                >
                    <div className="flex bg-black h-full bg-opacity-25 w-full justify-center items-center">
                        <h2 className="xl:text-5xl text-3xl  text-center font-mono font-semibold text-slate-300">
                            Great Cidatel for Learning
                        </h2>
                    </div>
                </div>
                <div
                    style={{
                        background: 'url("/slide.jpg")',
                    }}
                    className="w-full relative  h-full flex-shrink-0"
                >
                    <div className="flex bg-black h-full bg-opacity-25 w-full justify-center items-center">
                        <h2 className="xl:text-5xl text-3xl  text-center font-mono  font-semibold text-slate-200">
                            Great Cidatel for Learning.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideAnimation;
