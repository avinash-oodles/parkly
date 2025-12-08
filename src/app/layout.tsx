// import type { Metadata } from "next";
// import { Inter, Poppins } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-inter",
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-poppins",
// });

// export const metadata: Metadata = {
//   title: "Parkly",
//   description: "Parkly app",
//   icons: {
//     icon: "/favicon.svg", 
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
//       <body className="antialiased">
//         <Header />
//         <div className=" h-[72px] lg:h-22 w-full"></div>
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Parkly",
  description: "Parkly app",
  icons: {
    icon: "/favicon.svg", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 500,
              padding: '16px',
            },
            success: {
              style: {
                background: '#2C7FFF',
                color: '#FFFFFF',
              },
              iconTheme: {
                primary: '#FFFFFF',
                secondary: '#2C7FFF',
              },
            },
            error: {
              style: {
                background: '#ff4b4b',
                color: '#FFFFFF',
              },
              iconTheme: {
                primary: '#FFFFFF',
                secondary: '#ff4b4b',
              },
            },
          }}
        />
        <Header />
        <div className=" h-[72px] lg:h-22 w-full"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}