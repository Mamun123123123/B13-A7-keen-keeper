"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock, BarChart, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Timeline", href: "/timeline", icon: Clock },
  { name: "Stats", href: "/stats", icon: BarChart },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <h1 className="text-lg font-semibold text-gray-800">
          KeenKeeper
        </h1>


        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm transition
                ${
                  isActive
                    ? "bg-green-700 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={16} />
                {link.name}
              </Link>
            );
          })}
        </div>

    
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={22} className="text-black" /> : <Menu size={22} className="text-black" />}
        </button>
      </div>

    
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-lg transition
                ${
                  isActive
                    ? "bg-green-700 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;