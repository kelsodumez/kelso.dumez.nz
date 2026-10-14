import ImageModal from "../../../components/ImageModal/modal";

export default function Page() {
    return (
        <div>
            <h1>Cobalt Brand Identity</h1>

            {/*need to upscale this*/}
            <ImageModal src={"/tiny-politik/panel-system/v5.png"} alt={"V5"}/>
        </div>
    );
}
