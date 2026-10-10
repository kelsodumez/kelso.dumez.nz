import React from 'react';
import ImageModal from "../../../../components/modal";
export default function Page() {
    return (
        <div>
            <div className="section">
                <h1>Tiny Politik (Alpha)</h1>
                {/*<div className="media-container">*/}
                {/*    <Image src="/tiny-politik/alpha/cover.png" fill={true} objectFit={"contain"} loading={"eager"} alt="Tiny Politik Photo"/>*/}
                {/*</div>*/}
                <div className="media-container">
                    <iframe className="responsive-iframe" src="https://www.youtube.com/embed/rYzxd1EN6to?autoplay=1&mute=1"
                        title="TinyPolitik | Multiplayer Casual Strategy Trailer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{ zoom: 0.7 }}
                        allowFullScreen></iframe>
                </div>
            </div>
            <div className="section">
                <h2>Overview</h2>
                <p>
                    Tiny Politik is a prototype game that was produced over a period of twelve weeks under the
                    supervision of Clancy Duncan (UC) as part of the PROD322 ‘Gaming Project Studio 2’ course at the
                    University of Canterbury in 2024.
                </p>
                <p>
                    Our goal was to run an extended qualitative playtest; exploring the potential asynchronous
                    multiplayer in 4X games as a tool to engage both casual and serious players simultaneously.
                </p>
                <p>
                    Initially my role in this project was implementation of UI designed by our artist, however we
                    quickly discovered that this was a poor workflow, as the artist had little in-engine or UX design
                    experience at the time. To amend this, I took over the design of UI completely; Directing our artists
                    in their creation of UI assets, as at the time I had little confidence in UI art creation.
                </p>
                <p>
                    This project was where I discovered my passion for UI/UX design. As such, it&#39;s a little rough
                    around the edges; thanks to my learning as I went. I look forward to sharing the beta version of
                    <i> Tiny Politik</i>&#39;s interface design soon, where I will have corrected the various
                    design errors born from my lack of design education at the time.
                </p>

                <br></br>

                <h3>
                    Skills Developed
                </h3>
                <div className="row">
                    <div className="col">
                        <div className="table-item"><h4>Soft Skills</h4></div>
                        <div className="table-item"><li>Creative leadership & management</li></div>
                        <div className="table-item"><li>Iterative design & Agile</li></div>
                        <div className="table-item"><li>Player-centric experience design</li></div>
                        <div className="table-item"><li>User interface design</li></div>
                    </div>
                    <div className="col">
                        <div className="table-item"><h4>Technical Skills</h4></div>
                        <div className="table-item"><li>User interface design & Implementation</li></div>
                        <div className="table-item"><li>Long-term playtest management</li></div>
                        <div className="table-item"><li>In-engine content creation</li></div>
                    </div>
                </div>
            </div>
            <div className="section">
                <h2>Interface Design</h2>
                <h3>Main Menu</h3>
                <h3>In-Game Menus</h3>
                <p>some reflective stuff here</p>
            </div>
            <div className="section">
                <h2>Playtesting</h2>
                <h3>Paper Prototype(s)</h3>
                <p>
                    Two paper prototypes were conducted whilst other team members were developing the network solution
                    for the
                </p>
                <div className="media-container">
                    <ImageModal src={"/tiny-politik/alpha/discordPlaytest.gif"}
                                alt={"The playtest lasted 5 turns, each turn taking a bit over an hour to process manually"}/>
                </div>
                <div className="media-container">
                    <ImageModal src="/tiny-politik/alpha/Economy Final Turn.png"
                                alt="Economy was handled via a spreadsheet"/>
                </div>
            </div>
        </div>
    );
}
