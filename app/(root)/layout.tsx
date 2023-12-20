import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Gatot Kaca",
    description: "A Next.js 14 Gatot Kaca Meta Threads Application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className} suppressHydrationWarning={true}>
                    <Topbar />
                    
                    <main className="flex flex-row">
                        <LeftSidebar />
                        
                        <section className="main-container">
                            <div className="max-w-4xl w-full">
                                { children }
                            </div>
                        </section>

                        <RightSidebar/>
                    </main>

                    <Bottombar />
                </body>
            </html>
        </ClerkProvider>
    );
}
