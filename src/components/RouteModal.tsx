// src/components/RoutedModal.tsx
"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function RoutedModal({ 
  children, 
  title = "Modal Title" 
}: { 
  children: React.ReactNode; 
  title?: string 
}) {
  const router = useRouter();

  // When the modal "closes" via Radix UI (X button or backdrop click),
  // we tell Next.js to go back in history.
  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog open={true} onOpenChange={handleOnOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}