"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export function ClientSessionProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}): React.ReactNode {
  return (
    <SessionProvider session={session || null}>{children}</SessionProvider>
  );
}
