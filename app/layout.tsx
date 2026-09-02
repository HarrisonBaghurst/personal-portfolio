import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import UserIcon from "@/components/UserIcon";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: "Temp title",
    description: "Temp description",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={cn("h-full antialiased", "font-sans")}>
            <body className="min-h-full flex flex-col">
                <Navbar />
                {children}
                <UserIcon />
                <Toaster position="bottom-center" />
            </body>
        </html>
    );
}
