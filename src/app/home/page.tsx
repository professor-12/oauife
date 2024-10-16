import React from "react";

const HomePage = () => {
    return (
        <div className="flex space-x-5">
            <div
                style={{
                    background: 'url(/slide1.jpg")',
                }}
                className="bg-white w-4/5 h-[12rem]"
            ></div>
            <div className="bg-white w-2/5 rounded-xl h-[12rem]"></div>
        </div>
    );
};

export default HomePage;
