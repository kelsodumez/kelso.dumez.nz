import ImageModal from "../../../components/ImageModal/modal";

export default function Page() {
    return (
        <div className="page">
            <h1>Witch UI for Game Jam</h1>
            <br></br>
            <div className="row">
                <div>
                    <p>
                        As part of a one week game jam at the University of Canterbury I was responsible for creating the UI
                        in our quake-style boomer shooter.
                    </p>
                    <br></br>
                    <h4>This Included:</h4>
                    <li>Creation of 2D art in aseprite (Including a quick logo)</li>
                    <li>Implementation of UI art into Unity&#39;s UI Toolkit</li>
                    <li>Creation of a custom package for animating UI components (this is being added to Unity
                    as a feature soon!)</li>
                    <li>Implementing a custom screen-space shader pass for colour-clamped dithering</li>
                </div>
                <div className="col">
                <ImageModal src={"/witch-ui/Implementation.gif"} alt={"The final UI for the Jam"}/>
                {/*<ImageModal src={"/witch-ui/logo.png"} alt={"Quick and dirty logo"}/>*/}
                {/*<ImageModal src={"/witch-ui/cauldronbacker.png"} alt={""}/>*/}
                {/*<ImageModal src={"/witch-ui/cauldronbacker 2.png"} alt={""}/>*/}
                {/*<ImageModal src={"/witch-ui/cauldronbackerCHAR.png"} alt={""}/>*/}
                {/*<ImageModal src={"/witch-ui/charbacker.png"} alt={""}/>*/}
                {/*<ImageModal src={"/witch-ui/Witch-Sheet-Cackle.png"} alt={""}/>*/}
                {/*<ImageModal src={"/witch-ui/Witchcackle.gif"} alt={""}/>*/}
                {/*<ImageModal src={"/witch-ui/Witch-Sheet-Idle.png"} alt={""}/>*/}
                {/*<ImageModal src={"/witch-ui/witchidle.gif"} alt={""}/>*/}
                </div>
            </div>
            {/*need to upscale some of these*/}

        </div>
    );
}
