import { ReactNode } from "react";


export default async function Dashboard({ children }: { children: ReactNode }) {
    return (
        <div className="">
            {children}
        </div>
    );
}