import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner"
import localFont from "next/font/local"



//applying the fonts global in root - this is like the main.jsx file in react
const IBMPlexSans = localFont({
 src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const BebasNeue = localFont({
  src: [
    {path: '/fonts/BebasNeue-Regular.ttf', weight: '400', style: 'normal'},
  ],
  variable: '--font-bebas-neue'
});



//heres the metaData for the app
export const metadata: Metadata = {
  title: "BooksDom",
  description: "A University Library Management System",
};

const RootLayout = ({ children }:{children: ReactNode;}) =>  {
  return (
    <html lang="en">
      <body
        className={`${IBMPlexSans.className} ${BebasNeue.variable} antialiased`}
      >
        {children}

        <Toaster /> {/* need toaster to appear at the bottom of everything */}
      </body>
    </html>
  );
}

export default RootLayout; 