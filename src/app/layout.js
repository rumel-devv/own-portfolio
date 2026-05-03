
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/NextThemeProvider";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammed Rumel | MERN Stack Developer",
  description:
    "Muhammed Rumel is a MERN Stack Developer specializing in MongoDB, Express.js, React, and Node.js. Building scalable full-stack web applications with modern UI/UX.",
  keywords: [
    "Muhammed Rumel",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Express.js",
    "Next.js Portfolio",
    "Web Developer Bangladesh",
    "JavaScript Developer",
  ],
  authors: [{ name: "Muhammed Rumel" }],
  creator: "Muhammed Rumel",
  metadataBase: new URL("https://own-portfolio-rust.vercel.app"),

  openGraph: {
    title: "Muhammed Rumel | MERN Stack Developer Portfolio",
    description:
      "Full Stack MERN Developer building modern, scalable, and responsive web applications using React, Node.js, Express, and MongoDB.",
    url: "https://own-portfolio-rust.vercel.app",
    siteName: "Rumel Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammed Rumel | MERN Stack Developer",
    description:
      "Full Stack MERN Developer building modern web applications with React, Node.js, Express & MongoDB.",
    images: ["/og-image.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground">
        <NextThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Navbar />
          <main>{children}</main>
          <CustomCursor/>
        </NextThemeProvider>
      </body>
    </html>
  );
}