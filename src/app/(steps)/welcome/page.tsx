"use client"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link";

export default function WelcomePage() {
  const handleNext = () => {
      localStorage.setItem("welcomeCompleted", "true");
      localStorage.setItem("onboardingStep", "1");
      localStorage.setItem("lang", "en");
  }
    return (<>
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="text-center">
            <h1 className="text-lg text-muted-foreground">Welcome to Your Day</h1>
            <p className="text-4xl font-bold mb-4">Let's make your day</p>
        </div>
        <p></p>
        <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Choose Your language</SelectLabel>
          <SelectItem value="banana">English</SelectItem>
          <SelectItem value="blueberry">Francais</SelectItem>
          <SelectItem value="grapes">Spanish</SelectItem>
          <SelectItem value="pineapple">العربية</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <div className="mt-4">
      <Link href="/categories">
        <Button onClick={handleNext}>Next</Button>
      </Link>
    </div>
    </div>
    </>)
}