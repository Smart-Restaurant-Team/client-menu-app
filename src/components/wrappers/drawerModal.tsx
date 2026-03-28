// src/components/Modal.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
// import TransitionModal from "./motion/TransitionModal";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer" 
import TransitionModal from "../motion/TransitionModal";
import { Button } from "../ui/button";
import TransitionDrawerModal from "../motion/TransitionDrawerModal";
// import { Button } from "./ui/button";
export function DrawerModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(true)
  // 1. Improved Dismiss Logic
  const onDismiss = () => {
    router.back();
  };
  // 2. Handle the "Click Outside" correctly without leaking memory
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);


  // When the modal "closes" via Radix UI (X button or backdrop click),
  // we tell Next.js to go back in history.
  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      setOpened(false)
      setTimeout(() => router.back(), 200)
      
    }
  };

//   return (<>
//   <Drawer defaultOpen>
//   <DrawerTrigger>Open</DrawerTrigger>
//   <DrawerContent>
//     <DrawerHeader>
//       <DrawerTitle>Are you absolutely sure?</DrawerTitle>
//       <DrawerDescription>This action cannot be undone.</DrawerDescription>
//     </DrawerHeader>
//     <DrawerFooter>
//       <Button>Submit</Button>
//       <DrawerClose>
//         <Button variant="outline">Cancel</Button>
//       </DrawerClose>
//     </DrawerFooter>
//   </DrawerContent>
// </Drawer>
//   </>)

  return (
    <TransitionDrawerModal>
      {/* <div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 -backdrop-blur-sm sm:w-xl mx-auto"
        onClick={(e) => {
          if (e.target === overlayRef.current) onDismiss();
        }}
      >
        <div className="relative bg-white p-6 rounded-t-4xl shadow-2xl w-full max-h-screen flex flex-col">
          <button
            onClick={onDismiss}
            className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
          
          <div className="overflow-y-scroll">
            {children}
          </div>
        </div> 
      </div> */}
       
        <Drawer open={opened} onOpenChange={handleOnOpenChange} >
            
            <DrawerContent ref={overlayRef} className="sm:w-xl mx-auto border rounded-t-4xl!">
              {/* <DrawerHeader>
                
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader> */}
              {/* <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter> */}
              <div className="p-8 overflow-y-scroll">
                {children}
              </div>
            </DrawerContent>
          </Drawer>

    </TransitionDrawerModal>
  );
}