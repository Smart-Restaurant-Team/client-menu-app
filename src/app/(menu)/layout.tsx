"use client"
import Link from "next/link";
import { HouseIcon, FavoriteIcon, MenuIcon, SearchIcon} from "@assets/icons/phosphor_icons";
// import { FavoriteIcon, HouseIcon } from "../assets/icons/phosphor_icons";
import '@styles/theme.css';
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { List, ListBulletsIcon } from "@phosphor-icons/react";
import { useState } from "react";
export default function MenuLayout({children}: {children: React.ReactNode}) {
    const navs = [
        {name: "Home", href: "/home", icon: HouseIcon , segments: ['', 'home']},
        {name: "Menu", href: "/categories", icon: MenuIcon, segments: ['categories', 'dishes'] },
        {name: "Search", href: "/search", icon: SearchIcon , segments: ['search']},
        {name: "Favorites", href: "/favorites", icon: FavoriteIcon, segments: ['favorites']},

    ]   ;
    const [openedSheet, setOpenedSheet] = useState(false)
    const segment = useSelectedLayoutSegment() || '';
    const segments = useSelectedLayoutSegments();
    return (<>
    <div className="flex flex-col h-screen bg-muted">
        <header className="px-6 py-4 flex justify-between sticky bottom-0">
            <img src="https://i.pinimg.com/736x/eb/4f/74/eb4f749fd1c95eefe5cccbcd325d8299.jpg" 
            alt=""  className="h-12- size-12"/>
            <button onClick={()=> setOpenedSheet(!openedSheet)} className="p-0!">
                <List className="text-3xl" />
            </button>
        </header>
    
        <main className="grow overflow-y-scroll pt-10 px-6">
            {children}
        </main>
        <nav className="border-t bottom-0 w-full flex justify-around z- bg-white">
            {navs.map((nav, index) =>{
                const active = nav.segments?.includes(segment) 
                return (
                    <Link key={index} href={nav.href} className={`group hover:bg-muted h-full w-full py-4 ${active ? "bg-primary text-white": ''}`}>
                <div className="flex flex-col items-center justify-center group-hover:text-primary">
                    <nav.icon className="text-2xl"/>
                    <span className="group-hover:text-primary">{nav.name}</span>
                </div>
            </Link>
                )
            })}
        </nav>

            <Sheet onOpenChange={setOpenedSheet} open={openedSheet}>
  <div className="relative w-xl mx-auto bg-red-500">
    <SheetContent className="">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>This action cannot be undone.</SheetDescription>
    </SheetHeader>
  </SheetContent>
  </div>
</Sheet>
    </div>
    </>)
}