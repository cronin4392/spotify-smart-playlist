"use client";

import { signIn, signOut } from "next-auth/react";

const buttonClassName =
  "rounded-xl bg-white/10 py-2 px-4 text-white hover:bg-white/20";

export default function Auth({ signedIn }: { signedIn: boolean }) {
  return (
    <div className="flex gap-2">
      {!signedIn ? (
        <button className={buttonClassName} onClick={() => signIn()}>
          Sign In
        </button>
      ) : (
        <button className={buttonClassName} onClick={() => signOut()}>
          Sign Out
        </button>
      )}
    </div>
  );
}
