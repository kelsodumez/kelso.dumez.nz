import ImageModal from "../../../components/ImageModal/modal";

export default function Page() {
    return (
        <div>
            <h1>Cobalt Brand Identity</h1>
            <div className="row">
                <div className={"media-container"}>
                    <object data="/cobalt/submission.pdf#view=FitH" type="application/pdf" width="100%" height="100%">
                        <p><a href="/cobalt/submission.pdf">PDF</a></p>
                    </object>
                </div>
            </div>
        </div>
    );
}
