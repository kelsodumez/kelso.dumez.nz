"use client";
import Link from "next/link";

const portfolioItems_graphic = [
    {
        name: 'Cobalt',
        href: '/portfolio/cobalt',
        tag: "Graphic Design, Brand-Identity"
    },
    {
        name: 'Design work for Ōtautahi Bands',
        href: '/portfolio/design-4-bands/',
        tag: "Graphic Design, Design"
    },
    {
        name: 'Eye Magazine Webpage',
        href: '/portfolio/eye-webpage/',
        tag: 'Graphic Design, Web Design'
    },
    {
        name: 'Stomp!',
        href: '/portfolio/stomp',
        tag: "Graphic Design, Typeface Design"
    }
];

const portfolioItems_dev = [
    {
        name: 'Tiny Politik (Beta) Dynamic UI Panels',
        href: '/portfolio/tiny-politik/beta/panel-system',
        tag: "UI/UX Design, Unity Engine, UI Toolkit"
    },
    {
        name: 'Point of Sales System Spoof',
        href: '/portfolio/pos-system',
        tag: "Unity Engine"
    },
    {
        name: 'Tiny Politik (Alpha)',
        href: '/portfolio/tiny-politik/alpha',
        tag: "Learning UI/UX design through the alpha prototype of an asynchronous 4X multiplayer game."
    }
];

export default function PortfolioItemsDesign() {
    return <div className={"Portfolio"}>
        {
            portfolioItems_graphic.map((item) =>
            {
                return <div className={"portfolio-item"} key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                    <div className={"tag"}>{item.tag}</div>
                    <p>{item.description}</p>
                </div>
            })
        }</div>}

export function PortfolioItemsDev() {
    return <div className={"Portfolio"}>
        {
            portfolioItems_dev.map((item) => {
                return <div className={"portfolio-item"} key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                    <div className={"tag"}>{item.tag}</div>
                    <p>{item.description}</p>
                </div>
            })
        }</div>
}
