// src/app/@modal/(.)login/page.tsx
// import { RoutedModal } from "@/components/RoutedModal";
import { RoutedModal } from "@/components/RouteModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginModal() {
  return (
    <RoutedModal title="Login to your account">
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </div>
    </RoutedModal>
  );
}