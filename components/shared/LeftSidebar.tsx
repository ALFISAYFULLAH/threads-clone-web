"use client";

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn } from "@clerk/nextjs";

export default function LeftSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <section className="leftsidebar custom-scrollbar">
            <div className="w-full flex flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link) => (
                    <Link className={`relative flex justify-start rounded-lg gap-4 p-4 hover:bg-dark-4 ${pathname === link.route && "bg-blue hover:bg-blue"}`} key={link.label} href={link.route}>
                        <Image src={link.imgURL} alt={link.label} width={24} height={24} />
                        <p className="text-light-1 max-lg:hidden">{link.label}</p>
                    </Link>
                ))}
            </div>

            <div className="mt-10 px-6">
                <SignedIn>
                    <SignOutButton signOutCallback={() => router.push("/sign-in")}>
                        <div className="flex cursor-pointer gap-2 p-4">
                            <Image src={"assets/logout.svg"} alt="user" width={28} height={28} />
                            <p className="text-light-2 max-lg:hidden">Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </section>
    );
}
