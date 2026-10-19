import ImageModal from "../../../components/ImageModal/modal";
import React from "react";

export default function Page() {
    return (
        <div>
            <h1>Stomp! Typeface</h1>
            <div className="row">
                <div className={"media-container"}>
                    <iframe className="responsive-iframe" src="/stomp/stompwebpage.pdf"></iframe>
                </div>
            </div>
        </div>
    );
}
