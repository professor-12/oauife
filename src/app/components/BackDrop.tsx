import React from "react";

const BackDrop = ({ onClick }: { onClick(): any }) => {
    return <div onClick={onClick} className="fixed  inset-0 z-10" />;
};

export default BackDrop;
