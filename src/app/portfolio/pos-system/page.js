import React from 'react';
import ImageModal from "../../../components/ImageModal/modal";
export default function Page() {
    return (
        <div>
            <div className="section">
                <h1>POS System</h1>
                <div className="media-container">
                    <iframe className="responsive-iframe" src="https://www.youtube.com/embed/pY_XyjT_rb4?autoplay=1&mute=1"
                            title="TinyPolitik | Multiplayer Casual Strategy Trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            style={{ zoom: 0.7 }}
                            allowFullScreen></iframe>
                </div>
                <i>
                    The film&#39;s protagonist, a comic store clerk named Felicity, discovers the email of a customer in
                    her store&#39;s sales system matches an individual she follows online.
                </i>
            </div>
            <div className="section">
                <h1>About</h1>
                <div className={"row"}>
                    <div className={"section"}>
                        <p>
                            This work was commissioned by Massey film graduate
                            <a target="_blank" href={"https://instagram.com/kellychopsticks"}> Matthew Kelly </a>
                            for his honours project. It had a two week timeline,
                            and required frequent iteration to match any script changes.
                        </p>
                        <p>
                            As filming was on-location at Graphic Comics (Wellington), a lightweight web tool was needed to mitigate
                            any potential difficulties with whatever hardware was available.
                        </p>
                    </div>
                    <ImageModal src="/pos-system/Pos System Preview.gif" alt="The final build of the POS system"/>
                </div>
            </div>

            <div className={"section"}>
                <h1>Process</h1>
                <div className={"row"}>
                    <div className={"section"}>

                    </div>
                    <ImageModal src="/pos-system/Brief.png" alt="The brief provided by Matthew."/>
                </div>

                <h2>Implementation</h2>
                <p>
                    Given the time and budget available for this project, I settled on using this
                    <a href={"https://comp3interactive.itch.io/retro-windows-gui"}> free GUI pack from Itch</a>.
                    It was slightly more visually dated than our reference points, but enabled me to start working on
                    the tool right away instead of spending time iterating on a visual style.
                </p>
                <h3>Changes to the Brief</h3>
                <p>
                    As is the nature with any creative project, I received alterations to the initial brief based on
                    emerging complexities.
                </p>
            </div>
            <div className={"section"}>
                <h1>Takeaways</h1>
                <p>
                    Alignment is super important for commision work, I spent a lot of time making sure the tool had
                    convincing transitions between each page; but these didn&#39;t make it to the final cut. This could
                    have been avoided had I inquired as to which parts of the brief were highest priority, instead of
                    treating them all equally.
                </p>
                <p>
                    In future projects; I will spend more time initially communicating with my client/project leads before
                    making my own plans, especially in regards to understanding where my priorities should lie.
                </p>
            </div>
        </div>
    );
}