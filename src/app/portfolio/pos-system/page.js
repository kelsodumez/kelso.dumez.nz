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
                        <p>Block outs? (Find Them)</p>
                        <h2>Implementation</h2>
                        <p>
                            Given the time and budget available for this project, I settled on using this
                            <a href={"https://comp3interactive.itch.io/retro-windows-gui"}> free GUI pack from Itch</a>.
                            It was slightly more visually dated than our reference points, but enabled me to start working on
                            the tool right away instead of spending time I didn&#39;t have iterating on a visual style.
                        </p>
                        <p>
                            I chose to use Unity&#39;s Canvas instead of UI Toolkit, as at the time I wasn&#39;t familiar enough to estimate
                            a time frame properly. This gave some difficulties, as a lot of the responsivity that I desired
                            for the tool wasn&#39;t available.
                        </p>
                        <p>
                            Attempting to create proper grid layouts and a viewport-flexible tool cost me a decent bit of
                            development time, when I should have accepted the nature of my tool and worked within its
                            boundaries from the start.
                        </p>
                        <p>
                            <b>A key decision I made was to fake the functionality of buttons</b>. As there was unsurety as
                            to how the tool would used during the shoot, I made it so each page just cycles with a mouse click.
                            Similarly, the login page just listens for any keyboard input at all; instead filling the data
                            required by the brief. This sped up development significantly without having any impact on
                            the visual presentation of the tool, and helped increase the flexibility of the tool for
                            shooting.
                        </p>

                        <h3>Changes to the Brief</h3>
                        <p>
                            As is the nature with any creative project, I received alterations to the initial brief based on
                            emerging complexities.
                        </p>
                    </div>
                    <ImageModal src="/pos-system/Brief.png" alt="The brief provided by Matthew."/>
                </div>



            </div>
            <div className={"section"}>
                <h1>Core Takeaway</h1>
                <p>
                    Alignment is super important for commission work, I spent a lot of time making sure the tool had
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