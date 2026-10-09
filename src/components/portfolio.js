"use client";
import Link from "next/link";

const portfolioItems_graphic = [
    {
        name: 'Cobalt',
        href: '/portfolio/cobalt',
        tag: "Graphic Design, Brand-Identity"
    },
    {
        name: 'Eye Magazine Webpage',
        href: '/portfolio/eye-webpage/',
        tag: 'Graphic Design'
    },
    {
        name: 'Stomp!',
        href: '/portfolio/stomp',
        tag: "Graphic Design, Typeface Design"
    },
    {
        name: 'Design work for Ōtautahi Bands',
        href: '/portfolio/design-4-bands/',
        tag: "Graphic Design, Design"
    }
];

const portfolioItems_dev = [
    {
        name: 'Tiny Politik (Alpha)',
        href: '/portfolio/tiny-politik/alpha',
        tag: "UI/UX Design, Unity Engine"//,
        // description: "Design and implementation of UI for the alpha prototype of a asynchronous 4X multiplayer game."
    },
    {
        name: 'Tiny Politik (Beta) Dynamic UI Panels',
        href: '/portfolio/tiny-politik/beta/dynamic-panel',
        tag: "UI/UX Design, Unity Engine, UI Toolkit"
    },
    {
        name: 'Point of Sales System Spoof',
        href: '/portfolio/pos-system',
        tag: "Unity Engine"
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
