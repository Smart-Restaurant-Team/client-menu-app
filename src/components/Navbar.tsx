"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation"; // Added useParams
import { cn } from "@/lib/utils"; 
import { FavoriteIcon, HouseIcon, MenuIcon, SearchIcon, AboutInfoIcon} from "@/assets/icons/phosphor_icons";

export function Navbar() {
  const pathname = usePathname();
  const params = useParams();
  
  // Extract restaurant_id from the URL params instead of localStorage
  const resId = params?.restaurant_id;

  const navItems = [
    { 
      name: "Overview",
      href: `/restaurants/${resId}/home`,
      icon: <HouseIcon className="text-2xl"/>
    },
    { 
      name: "Search",
      href: `/restaurants/${resId}/search`,
      icon: <SearchIcon className="text-2xl"/>
    },
    { 
      name: "Menu",
      href: `/restaurants/${resId}/menu`,
      icon: <MenuIcon className="text-2xl"/>
    }, 
    { 
      name: "Favorites",
      href: `/restaurants/favorites`,
      icon: <FavoriteIcon className="text-2xl"/>
    },
    { 
      name: "Infos",
      href: `/restaurants/${resId}/infos`,
      icon: <AboutInfoIcon className="text-2xl"/>
    },
  ];

  return (
    <nav className="flex justify-evenly items-center border h-full w-full bg-white">
      {navItems.map((item) => {
        // Prevent rendering links with "undefined" if resId isn't loaded yet
        if (!resId && item.href.includes("undefined")) return null;

        const isActive = pathname === item.href;

        return (
          <NavItem key={item.name} item={item} isActive={isActive} />
        );
      })}
    </nav>
  );
}

const NavItem = ({item, isActive}:{isActive: boolean, item: any })=>{
  return (
    <Link
      href={item.href}
      className={cn(
        "rounded-full flex flex-col items-center p-3 transition-all duration-200",
        isActive 
          ? "bg-blue-600 text-white scale-110 shadow-lg" 
          : "text-gray-400 hover:bg-gray-100"
      )}
    >
      {item.icon}
      {/* Optional: <span className="text-[10px] mt-1">{item.name}</span> */}
    </Link>
  )
}