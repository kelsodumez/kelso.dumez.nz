import ImageModal from "../../../components/ImageModal/modal";
import React from "react";

export default function Page() {
    return (
        <div>
                <h1>Posters for Ōtautahi bands</h1>
                    <div className="section">
                        <div className={"media-container"}>
                            {/*<iframe className="responsive-iframe"*/}
                            {/*        src= "/bands/LA_Poster.pdf"*/}
                            {/*        style={{position: "absolute" height: "100%"}}>*/}
                            {/*</iframe>*/}
                            {/*<iframe className={"responsive-iframe"}*/}
                            {/*        // src="bands/LA_poster.pdf"*/}
                            {/*        // style={{position: "absolute", width: "100%", height: "100%" }} />*/}
                            <iframe className="responsive-iframe" src="/bands/LA_Poster.pdf"></iframe>
                        </div>
                        <div>
                            <p>
                                Test test
                            </p>
                        </div>
                    </div>
        </div>
    );
}
