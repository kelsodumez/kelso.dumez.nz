"use client";
import Link from "next/link";

const portfolioItems_graphic = [
    {
        name: 'This Website!',
        href: 'https://github.com/kelsodumez/kelso.dumez.nz',
        tag: "I taught myself React + JS Frontend for this site to better understand responsive layouts. No AI was used."
    },
    {
        name: 'Character Sheet Commision for Java Asunder',
        href: '/portfolio/ja-character-sheet',
        tag: 'Commissioned designed work for an indie TTRPG project'
    },
    {
        name: 'Cobalt',
        href: '/portfolio/cobalt',
        tag: "Graphic Design, Brand-Identity"
    },
    {
        name: 'Design work for Ōtautahi Bands',
        href: '/portfolio/bands/',
        tag: "Graphic Design, Design"
    },
    {
        name: 'Eye Magazine Webpage Mockup',
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
        name: 'Witchy DOOM Style UI for a Game Jam',
        href: '/portfolio/witch-ui',
        tag: "UI/UX Design, Unity Engine, UI Toolkit",
        date: new Date(2026, 8)
    },
    {
        name: 'Tiny Politik (Beta) Dynamic UI Panels',
        href: '/portfolio/tiny-politik/beta/panel-system',
        tag: "UI/UX Design, Unity Engine, UI Toolkit",
        date: new Date(2026, 5)
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
    return <div>
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
    return <div>
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
