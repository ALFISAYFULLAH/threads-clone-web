"use client"

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Bottombar() {
    const pathname = usePathname()

    return (
        <section className="bottombar">
            <div className="bottombar_container">
                {sidebarLinks.map((link) => (
                    <Link className={`relative flex flex-col items-center rounded-lg gap-4 p-4 hover:bg-dark-4 ${pathname === link.route && "bg-blue hover:bg-blue"}`} key={link.label} href={link.route}>

                        <Image src={link.imgURL} alt={link.label} width={24} height={24} />
                        <p className="text-light-1 max-sm:hidden">{link.label.split(" ")[0]}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
