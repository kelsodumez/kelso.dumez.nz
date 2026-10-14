"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
    // { name: 'About', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    {name: 'Contact', href: '/contact' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className="navbar">
            <div className="title">
                <header><Link href={"/"}>Kelso</Link></header>
                <header><Link href={"/"}>du Mez</Link></header>
                {/*<header></header>*/}
            </div>
            <div className="nav-links">
            {navigation.map((item) => {
                const isCurrent = pathname === item.href;
                return (
                    <Link key={item.name} href={item.href}
                        className={classNames(isCurrent ? 'header-focused' : 'header')}>
                        {item.name}
                    </Link>
                )
            })}
            </div>
        </div>
    )
}
