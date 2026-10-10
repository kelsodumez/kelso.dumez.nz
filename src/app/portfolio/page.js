import PortfolioItemsDesign from "../../components/portfolio";
import {PortfolioItemsDev} from "../../components/portfolio";
export default function Portfolio() {
    return (
        <div>
            <div className="section">
                <h2>Traditional Design</h2>
                <PortfolioItemsDesign />
            </div>
            <div className="section">
                <h2>In-Engine</h2>
                <PortfolioItemsDev />
            </div>
        </div>
    );
}
