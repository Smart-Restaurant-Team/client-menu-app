// src/components/Modal.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import TransitionModal from "./motion/TransitionModal";
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
import { Button } from "./ui/button";
export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

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



  return (<>
  <Drawer defaultOpen>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  </>)
  return (
    <TransitionModal>
      {/* 3. The Overlay (Backdrop) */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 -backdrop-blur-sm"
        onClick={(e) => {
          // Only dismiss if the user clicks the backdrop, not the modal content
          if (e.target === overlayRef.current) onDismiss();
        }}
      >
        {/* 4. The Modal Content Container */}
        <div className="relative bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full m-4">
          <button
            onClick={onDismiss}
            className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
          
          {children}
        </div>
      </div>
    </TransitionModal>
  );
}