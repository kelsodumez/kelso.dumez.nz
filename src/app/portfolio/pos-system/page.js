import React from 'react';
import Image from "next/image";
export default function Page() {
    return (
        <div>
            <h1>POS System</h1>
            <div className="video-container">
                <Image src="/pos-system/Pos System Preview.gif" fill={true} loading={"eager"} alt="POS System Preview"/>
            </div>
        </div>
    );
}
