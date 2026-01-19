import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

// Note: Fonts and Metadata are usually defined in the Root Layout. 
// If this is a nested layout, they may not be needed here.

export default function RestaurantRootLayout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        // Use a fragment or a div instead of <html>/<body>
        <div className="bg-stone-800 h-screen grid grid-rows-12 overflow-hidden">
            {/* 1. Main Application Shell */}
            <main className="row-span-12 flex flex-col sm:m-4 sm:rounded-lg p-2 overflow-hidden bg-white">
                
                {/* Header: Fixed Height */}
                <header className="h-12 bg-white border-b rounded-t-md flex items-center px-4">
                    <h1 className="font-bold">My App</h1>
                </header>

                {/* Content Area */}
                <section className="flex-grow overflow-y-auto p-4">
                    {children}
                </section>

                {/* Footer / Navbar Area */}
                <footer className="h-fit bg-white border rounded-b-md flex">
                     <Navbar />
                </footer>

            </main>

            {/* 2. Modal Slot */}
            {modal}
        </div>
    );
}