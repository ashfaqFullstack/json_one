import Navbar from "@/components/home/Navbar";
import { ReactNode } from "react";


export default async function Dashboard({ children }: { children: ReactNode }) {
    return (
        <div className="bg-[white]">
            <Navbar />
            {children}
        </div>
    );
}