import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const mPlusRounded1c = M_PLUS_Rounded_1c({
    variable: "--font-m-plus-rounded-1c",
    weight: ["100", "300", "400", "500", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "maehiyu's portfolio",
    description: "maehiyu's portfolio",
    icons: {
        icon: "/icon.jpg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
              className={`${mPlusRounded1c.className} antialiased`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
