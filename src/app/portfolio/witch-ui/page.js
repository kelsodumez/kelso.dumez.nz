import ImageModal from "../../../components/ImageModal/modal";

export default function Page() {
    return (
        <div>
            <h1>Witch UI for Game Jam</h1>

            {/*need to upscale some of these*/}
            <ImageModal src={"/witch-ui/logo.png"} alt={"Quick and dirty logo"}/>
            <ImageModal src={"/witch-ui/cauldronbacker.png"} alt={""}/>
            <ImageModal src={"/witch-ui/cauldronbacker 2.png"} alt={""}/>
            <ImageModal src={"/witch-ui/cauldronbackerCHAR.png"} alt={""}/>
            <ImageModal src={"/witch-ui/charbacker.png"} alt={""}/>
            <ImageModal src={"/witch-ui/Witch-Sheet-Cackle.png"} alt={""}/>
            <ImageModal src={"/witch-ui/Witchcackle.gif"} alt={""}/>
            <ImageModal src={"/witch-ui/Witch-Sheet-Idle.png"} alt={""}/>
            <ImageModal src={"/witch-ui/witchidle.gif"} alt={""}/>
        </div>
    );
}
