"use client";
import Link from "next/link";
import { LuMenu, LuChevronDown, LuInfo, LuPhoneCall } from "react-icons/lu";
import ThemeToggle from "../Shared/ThemeToggle";

export default function Navbar() {

    const links = <>
        <li><Link href="/">Home</Link></li>

    </>

    return (
        <div className=" bg-base-100/80 backdrop-blur-md sticky top-0 z-50 ">
            <div className="max-w-7xl mx-auto navbar  border-base-200 px-4 lg:px-8 items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
                            <LuMenu className="h-6 w-6" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-base-200"
                        >
                            {links}
                        </ul>
                    </div>
                    <Link href="/" className="text-xl font-black tracking-tighter text-primary flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-content">
                            W
                        </div>
                        WaveTone
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 font-medium">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-3">
                    <ThemeToggle />
                    <Link href="/login" className="btn btn-primary btn-sm md:btn-md rounded-full px-6">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}