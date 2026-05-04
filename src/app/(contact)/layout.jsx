import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/NextThemeProvider";


export const metadata = {
  title: "Muhammed Rumel | MERN Stack Developer",
  description:
    "Muhammed Rumel is a MERN Stack Developer specializing in React, Next.js, Node.js, and modern UI/UX design. Explore portfolio, projects, and skills.",
  keywords: [
    "Muhammed Rumel",
    "MERN Stack Developer",
    "Frontend Developer Bangladesh",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer",
    "JavaScript Developer",
  ],
  authors: [{ name: "Muhammed Rumel" }],
  creator: "Muhammed Rumel",

  openGraph: {
    title: "Muhammed Rumel | MERN Stack Developer",
    description:
      "Modern portfolio of Muhammed Rumel showcasing React, Next.js, and full-stack projects.",
    url: "https://rumel-portfolio.vercel.app",
    siteName: "Rumel Portfolio",
    images: [
      {
        url: "https://rumel-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Rumel Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammed Rumel | MERN Stack Developer",
    description:
      "Modern portfolio showcasing React, Next.js and full-stack development skills.",
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