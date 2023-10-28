"use server";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, auth } from "@clerk/nextjs";
import { Logo } from "./logo";

export const LandingNavbar = () => {
  const { userId } = auth();
  return (
    <div className="w-full flex fixed top-0 bg-background items-center p-6 bg-black">
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {userId ? (
          <>
            <Button variant="ghost">Enter Bob</Button>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <>
            <SignUpButton mode="modal">
              <Button size="sm">Sign up</Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button size="sm">Sign in</Button>
            </SignInButton>
          </>
        )}
      </div>
    </div>
  );
};
