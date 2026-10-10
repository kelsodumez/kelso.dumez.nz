export default function Home() {
    return (
        <div>
            <div className="section">
                <h1>
                    About Me
                </h1>
                <p>
                    I&#39;m an Ōtautahi based game development graduate from the University of Canterbury. I&#39;m passionate
                    about the intersection of graphic & game design, particularly when it&#39;s explored in unique or
                    weird ways.
                </p>
                <p>
                    Interests of mine include reading fiction (Le Guin & Strugatsky brothers iykyk),
                    collecting CDs & vinyl, and playing guitar (badly).
                </p>
                <p>
                    Feel free to <a href={"/contact"}> contact me </a> if you&#39;re curious about any of
                    <a href={"/portfolio"}> my work </a> or just wanna talk about something random,
                    I&#39;ll generally respond within a business day
                    or so.
                </p>
            </div>

            <div className={"section"}>
                <div>
                    <h4>What I&#39;ve been listening to recently:</h4>
                    <div className={"media-container"}>
                        <iframe loading={"eager"}  title={"My Top Albums in the last 30 days"}
                                src={"https://lastfm-embed.vercel.app/api/top-albums?user=keslo_&lang=en&theme=dark&borderSize=0&borderRadius=0&showTitle=false&bgColor=%2300000000&textColor=%237B4D35&urlColor=%237B4D35&scrobbleColor=%23332C2B&limit=6&period=1month&layout=vertical&rows=0&columns=2"}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}