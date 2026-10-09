"use client";
import Link from "next/link";

const portfolioItems_graphic = [
    {
        name: 'Cobalt',
        href: '/portfolio/cobalt',
        tags: "Graphic Design, Brand-Identity"
    },
    {
        name: 'Eye Magazine Responsive Webpage Prototype',
        href: '/portfolio/eye-webpage/',
        tags: 'Graphic Design'
    },
    {
        name: 'Stomp! Typeface Design',
        href: '/portfolio/stomp',
        tags: "Graphic Design, Typeface Design"
    },
    {
        name: 'Design work for Ōtautahi Bands',
        href: '/portfolio/design-4-bands/',
        tags: "Graphic Design, Design"
    }
];

const portfolioItems_dev = [
    {
        name: 'Tiny Politik (Alpha)',
        href: '/portfolio/tiny-politik/alpha',
        tags: "UI/UX Design, Unity Engine"//,
        // description: "Design and implementation of UI for the alpha prototype of a asynchronous 4X multiplayer game."
    },
    {
        name: 'Tiny Politik (Beta) Dynamic Panel Design',
        href: '/portfolio/tiny-politik/beta/dynamic-panel',
        tags: "UI/UX Design, Unity Engine, UI Toolkit"
    },
    {
        name: 'Point of Sales System Spoof',
        href: '/portfolio/pos-system',
        tags: "Unity Engine"
    }
];

export default function PortfolioItemsDesign() {
    return <div className={"Portfolio"}>
        {
            portfolioItems_graphic.map((item) =>
            {
                return <div className={"portfolio-item"} key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                    <div className={"tag-list"}>{item.tags}</div>
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
                    <div className={"tag-list"}>{item.tags}</div>
                    <p>{item.description}</p>
                </div>
            })
        }</div>
}
