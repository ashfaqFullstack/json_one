import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/app/Providers";
import { auth } from "@/auth";
import "../styles/normalize.css";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-ui/styles/dark/media-query.css";
import "@liveblocks/react-tiptap/styles.css";
import "../styles/globals.css";
import "../styles/text-editor.css";
import ProtectedSite from "@/components/home/ProtectedSite";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jsonone – Scalable Backend as a Service (BaaS) for Africa",
  description: "jsonone is Africa’s first full-stack Backend as a Service (BaaS), offering secure authentication, scalable MongoDB databases, edge functions, real-time data APIs, mobile money (MPesa), airtime, messaging, file storage, and event-driven architecture—all in one powerful platform"
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProtectedSite>
          <Providers session={session}>{children}</Providers>
        </ProtectedSite>
      </body>
    </html>
  );
}
