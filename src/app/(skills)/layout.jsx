import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/NextThemeProvider";


export const metadata = {
  title: "Skills | Muhammed Rumel - MERN Stack Developer",
  description:
    "Explore the technical skills of Muhammed Rumel, a MERN Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and modern web technologies.",
  keywords: [
    "Muhammed Rumel Skills",
    "MERN Stack Developer Skills",
    "React Skills",
    "Next.js Developer Bangladesh",
    "Frontend Developer Skills",
    "Backend Developer Node.js",
    "Full Stack Developer Skills",
    "JavaScript Developer Skills",
  ],
  authors: [{ name: "Muhammed Rumel" }],
  creator: "Muhammed Rumel",

  openGraph: {
    title: "Skills | Muhammed Rumel",
    description:
      "Technical skills and technologies used by Muhammed Rumel in modern web development.",
    url: "https://rumel-portfolio.vercel.app/skills",
    siteName: "Rumel Portfolio",
    images: [
      {
        url: "https://rumel-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Rumel Skills",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Skills | Muhammed Rumel",
    description:
      "Explore MERN stack and modern web development skills of Muhammed Rumel.",
    images: ["https://rumel-portfolio.vercel.app/og-image.png"],
  },
};

export default function AboutLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
   
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