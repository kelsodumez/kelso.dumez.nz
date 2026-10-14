import ImageModal from "../../../../../components/ImageModal/modal";

export default function Page() {
    return (
        <div>
            <h1>Dynamic Panel System</h1>

            {/*need to upscale this*/}
            <ImageModal src={"/tiny-politik/panel-system/v5.png"} alt={"V5"}/>
        </div>
    );
}
