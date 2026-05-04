import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/NextThemeProvider";

export const metadata = {
  title: "Projects | Muhammed Rumel - MERN Stack Developer",
  description:
    "Explore real-world web development projects built by Muhammed Rumel using React, Next.js, Node.js, Express, and MongoDB. Modern UI/UX and full-stack applications included.",
  keywords: [
    "Muhammed Rumel Projects",
    "MERN Stack Projects",
    "React Projects Portfolio",
    "Next.js Projects",
    "Full Stack Developer Bangladesh",
    "Web Development Projects",
    "JavaScript Projects",
    "Frontend Backend Projects",
  ],
  authors: [{ name: "Muhammed Rumel" }],
  creator: "Muhammed Rumel",

  openGraph: {
    title: "Projects | Muhammed Rumel",
    description:
      "Showcase of modern MERN stack and full-stack web development projects.",
    url: "https://rumel-portfolio.vercel.app/projects",
    siteName: "Rumel Portfolio",
    images: [
      {
        url: "https://rumel-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Rumel Projects",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Muhammed Rumel",
    description:
      "Explore MERN stack and full-stack web development projects by Muhammed Rumel.",
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