"use server";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";

export const LandingNavbar = () => {
  const user = currentUser();
  return (
    <div className="w-full flex fixed top-0 bg-background items-center p-6 md:px-32 px-16 border-b border-b-black">
      <Logo />
      <div className="md:ml-auto md:justify-end justify-end  w-full flex items-center gap-x-2">
        {!!user ? (
          <>
            <Link href="/home">
              <Button variant="ghost">Enter Bob</Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <>
            <SignInButton mode="modal">
              <Button size="sm">Sign in</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Register</Button>
            </SignUpButton>
          </>
        )}
      </div>
    </div>
  );
};
