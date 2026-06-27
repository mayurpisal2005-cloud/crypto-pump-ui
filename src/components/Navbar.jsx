import { NavLink } from "react-router-dom";

import {

    Home,

    Search,

    ScanSearch,

    Info

} from "lucide-react";

export default function Navbar() {

    const navItems = [

        {

            name: "Home",

            path: "/",

            icon: Home

        },

        {

            name: "Predict",

            path: "/predict",

            icon: Search

        },

        {

            name: "Market Scan",

            path: "/scan",

            icon: ScanSearch

        },

        {

            name: "About",

            path: "/about",

            icon: Info

        }

    ];

    return (

        <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-green-500/20 shadow-lg">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

                <NavLink

                    to="/"

                    className="flex items-center gap-3"

                >

                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-xl shadow-[0_0_18px_rgba(34,197,94,0.45)]">

                        🚀

                    </div>

                    <div>

                        <h1 className="text-2xl font-black bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300 bg-clip-text text-transparent">

                            Crypto Pump AI

                        </h1>

                        <p className="text-xs text-zinc-500">

                            Machine Learning Platform

                        </p>

                    </div>

                </NavLink>

                <div className="flex items-center gap-3">

                    {

                        navItems.map((item) => {

                            const Icon = item.icon;

                            return (

                                <NavLink

                                    key={item.path}

                                    to={item.path}

                                    className={({ isActive }) =>

                                        `flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 font-medium

                                        ${isActive

                                            ? "bg-green-500/20 text-green-400 border border-green-500/30 shadow-[0_0_18px_rgba(34,197,94,0.25)]"

                                            : "text-zinc-300 hover:bg-white/5 hover:text-green-300"

                                        }`

                                    }

                                >

                                    <Icon size={18} />

                                    {item.name}

                                </NavLink>

                            );

                        })

                    }

                </div>

            </div>

        </nav>

    );

}