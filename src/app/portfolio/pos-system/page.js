import React from 'react';
import ImageModal from "../../../components/modal";
export default function Page() {
    return (
        <div>
            <h1>POS System</h1>
            <div className="media-container">
                <ImageModal src="/pos-system/Pos System Preview.gif"
                            alt="The final build of the POS system"/>
            </div>
        </div>
    );
}