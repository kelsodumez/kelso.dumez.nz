import PortfolioItemsDesign from "../../components/portfolio";
import {PortfolioItemsDev} from "../../components/portfolio";
export default function Portfolio() {
    return (
        <div>
            <div className="row">
            <div className={"Portfolio"}>
                <h2>Digital Design</h2>
                <PortfolioItemsDesign />
            </div>

            <div className={"Portfolio"}>
                <h2>Unity Engine</h2>
                <PortfolioItemsDev />
            </div>
            </div>
            <div className="section">
                <i>
                    Work displayed in descending chronological order.
                </i>

            </div>
        </div>
    );
}
