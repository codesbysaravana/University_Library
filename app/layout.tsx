import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner"
import localFont from "next/font/local"
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
//frrom root file auth



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

const RootLayout = async ({ children }:{children: ReactNode;}) =>  {
  const session = await auth()

  return (
    <html lang="en">
    <SessionProvider session={session}>

      <body
        className={`${IBMPlexSans.className} ${BebasNeue.variable} antialiased`}
      >
        {children}

        <Toaster /> {/* need toaster to appear at the bottom of everything */}
      </body>
      </SessionProvider>
    </html>
  );
}

export default RootLayout; 

///Finally wrap em all with sessionProvider