import React from 'react';
import ImageModal from "../../../../components/ImageModal/modal";
import Image from "next/image";
export default function Page() {
    return (
        <div>



            <div className={"section"}><h1>Tiny Politik (Alpha)</h1></div>



            <div className="section">

                <div className="row">
                    <div className={"section"}>
                        <p>
                            <b><i>Tiny Politik</i> is a prototype produced over a period of twelve weeks</b> under the
                            supervision of Clancy Duncan (UC) as part of the PROD322 ‘Gaming Project Studio 2’ course at the
                            University of Canterbury in 2024.
                        </p>
                        <br></br>
                        <div className="row-flex">
                            <div className="col">
                                <div className="table-item"><h4>Soft Skills Developed</h4></div>
                                <div className="table-item"><li>Creative leadership & management</li></div>
                                <div className="table-item"><li>Iterative design & Agile</li></div>
                                <div className="table-item"><li>Player-centric experience design</li></div>
                                <div className="table-item"><li>User interface design</li></div>
                            </div>

                            <div className="col">
                                <div className="table-item"><h4>Technical Skills Developed</h4></div>
                                <div className="table-item"><li>User interface design & Implementation</li></div>
                                <div className="table-item"><li>Long-term playtest management</li></div>
                                <div className="table-item"><li>In-engine content creation</li></div>
                            </div>
                        </div>
                    </div>
                    <ImageModal src="/tiny-politik/alpha/cover.png" alt="Tiny Politik Photo"/>
                </div>
            </div>

            <div className="section">
                <div className="media-container">
                    <iframe className="responsive-iframe" src="https://www.youtube.com/embed/rYzxd1EN6to?autoplay=1&mute=1"
                            title="TinyPolitik | Multiplayer Casual Strategy Trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            style={{ zoom: 0.7 }}
                            allowFullScreen></iframe>
                </div>
                <div className="section">
                <i>
                    You can check out the Tiny Politik Alpha yourself here on <
                    a target="_blank" href={"https://olivercoates1.itch.io/tinypolitk"}>itch</a>
                    , although it requires running a WebGL-based server (instructions in itch description).
                </i>
                    <br></br>
                <div className="section">
                    <p>
                        Our goal with <i>Tiny Politik</i> was to run an <b>extended qualitative playtest</b>; exploring the
                        potential of <b>asynchronous multiplayer in 4X games</b> as a tool to <b>engage both casual and
                        serious players</b> simultaneously.
                    </p>

                    <p>
                        Initially my role in this project was implementation of UI designed by our artist, however we
                        quickly discovered that this was a poor workflow, as the artist had little in-engine or UX design
                        experience at the time. To amend this, <b>I took over the design of UI completely</b>; Directing our artists
                        in their creation of UI assets, as at the time I had little confidence in UI art creation.
                    </p>

                    <p>
                        <b>This project was where I discovered my passion for UI/UX design</b>. As such, it&#39;s a little rough
                        around the edges; thanks to my learning as I went and the project&#39;s brief timeline. <b>I look forward to sharing the beta version of
                        <i> Tiny Politik</i>&#39;s interface design soon</b>, where I will have corrected the various
                        design errors born from my lack of design education at the time.
                    </p>

                    <i>
                        Check my page discussing my WIP implementation of a <a target="_blank" href={"/portfolio/tiny-politik/beta/panel-system"}>
                        dynamic panel system in Unity&#39;s UI Toolkit</a> for our Beta release.
                    </i>
                </div>
                </div>


            </div>



            <div className="section">
                <h2>Interface Design</h2>

                {/*<ImageModal src={"/tiny-politik/alpha/12@11.25.21.png"} alt={"panel"}/>*/}
                <div className={"row"}>
                    <div className={"section"}>
                        <p>
                            Due to the short timespan, and our poor understanding of UI workflows, most of my time was spent
                            reskinning and adjusting UI made by developers. With hindsight, I would have first designed the
                            UI/UX holistically in a program such as Figma; then blocking it out in Unity.
                        </p>
                        <p>
                            My aesthetic inspirations were based on 2000s era computing, although I&#39;m fairly dissatisfied
                            with this initial result. In the WIP <a href={"/portfolio/tiny-politik/beta"}>beta version</a>
                            I&#39;ve been able to land on a much more grounded and accurate reflection of 2000s computer
                            interface design.
                        </p>
                    </div>
                    <div className={"section"}>
                        <ImageModal src={"/tiny-politik/alpha/NuclearPanel.png"} alt={"panel"}/>
                        <div className={"tall-image-container"}>
                            <ImageModal src={"/tiny-politik/alpha/JoinPanel.png"} alt={"panel"}/>
                        </div>
                    </div>

                </div>
                    <br></br>
                {/*<h4>Panels</h4>*/}
                {/*    <div className="row">*/}
                {/*        <p>Lorum Ipsum Dolor</p>*/}
                {/*        <div>*/}
                {/*            <div className="row-flex">*/}
                {/*                /!*<div className={"tall-image-container"}>*!/*/}
                {/*                /!*    <ImageModal src={"/tiny-politik/alpha/EconomyPanel.png"} alt={"panel"}/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*<div className={"tall-image-container"}>*!/*/}
                {/*                /!*    <ImageModal src={"/tiny-politik/alpha/MilitaryPanel.png"} alt={"panel"}/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
            </div>


            <div className="section">
                <h2>Playtesting</h2>
                <h3>Paper Prototype(s)</h3>
                <div className={"row"}>
                    <div className={"section"}>
                     <p>
                        Two paper prototypes were conducted whilst other team members were developing the network solution
                        for Tiny Politik. The first was conducted in-person over a night, this was mainly a preliminary
                         test to iron out specific mechanic details for the second playtest.
                    </p>
                    <p>
                        The second playtest was of a much larger scale and digital, involving Discord. Over the course of
                        five days I painstakingly processed the turns of ~18 players, the amount of informal data we got
                        from players during this period was highly valuable. In particular, it served to reinforce the
                        validity of our asynchronous concept; as we found the spaced out turns served to increase player
                        excitement and social interaction.
                    </p>
                    <p>
                        Somewhat unsurprisingly, this second playtest quickly became unsustainable to maintain due to
                        the sheer amount of actions to process once player&#39;s had developed their nations. Rather
                        than continue it unnecessarily, I began work on the digital prototype; which other team members
                        had gotten the initial MVP of working.
                    </p>
                    </div>
                    <div className={"col"}>
                        <ImageModal src={"/tiny-politik/alpha/Initial Paper Prototype.png"}
                                alt={"The playtest lasted 5 turns, each turn taking a bit over an hour to process manually"}/>
                        <ImageModal src={"/tiny-politik/alpha/discordPlaytest.gif"}
                                    alt={"The playtest lasted 5 turns, each turn taking a bit over an hour to process manually"}/>
                    </div>
                </div>
            </div>


            <div className="section">
                <h3>Digital Prototype</h3>
                <div className={"row"}>
                    <div className={"section"}>
                        <p>
                            Throughout development we ran frequent, multiplayer internal and external tests. These were
                            critical for fixing balance issues and fixing crashes. After completing our final development
                            sprint, we hosted a 20-player (including ourselves) playtesting event spanning a week.
                        </p>
                        <p>
                            We found long-term player engagement to be highly positive in our limited playtesting
                            (all playtesters fellow students), with players agreeing that they were gripped by the concept
                            when first hearing about it, eager to see how the game continues even after 28 turns.
                        </p>
                    </div>
                    <div className={"col"}>
                        <div className={"row"}>
                            <ImageModal src="/tiny-politik/alpha/playtesting-data/social-experience.png"
                                        alt=""/>
                            <ImageModal src="/tiny-politik/alpha/playtesting-data/time-investment.png"
                                        alt=""/>
                        </div>
                        <div className={"row"}>
                            <ImageModal src="/tiny-politik/alpha/playtesting-data/long-term-player-engagement.png"
                                        alt=""/>
                            <ImageModal src="/tiny-politik/alpha/playtesting-data/player-capability.png"
                                        alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
