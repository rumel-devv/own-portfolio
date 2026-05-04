import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/NextThemeProvider";

export const metadata = {
  title: "About | Muhammed Rumel - MERN Stack Developer",
  description:
    "Learn more about Muhammed Rumel, a MERN Stack Developer from Bangladesh skilled in React, Next.js, Node.js, and modern web development. Passionate about building clean and scalable web applications.",
  keywords: [
    "Muhammed Rumel About",
    "MERN Stack Developer Bangladesh",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Frontend Developer Bangladesh",
    "JavaScript Developer",
  ],
  authors: [{ name: "Muhammed Rumel" }],
  creator: "Muhammed Rumel",

  openGraph: {
    title: "About Muhammed Rumel | MERN Stack Developer",
    description:
      "Learn about Muhammed Rumel’s skills, experience, and journey as a MERN Stack Developer.",
    url: "https://rumel-portfolio.vercel.app/about",
    siteName: "Rumel Portfolio",
    images: [
      {
        url: "https://rumel-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Muhammed Rumel",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Muhammed Rumel | MERN Stack Developer",
    description:
      "Learn about skills, experience and journey of Muhammed Rumel.",
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