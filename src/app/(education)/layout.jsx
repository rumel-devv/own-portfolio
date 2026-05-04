import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/NextThemeProvider";


export const metadata = {
  title: "Education | Muhammed Rumel - MERN Stack Developer",
  description:
    "Explore the educational background of Muhammed Rumel, a MERN Stack Developer from Bangladesh. Currently studying BA (Hons) in Philosophy and self-learning modern web development including React, Next.js, and Node.js.",
  keywords: [
    "Muhammed Rumel Education",
    "MERN Stack Developer Bangladesh",
    "Web Developer Education",
    "BA Honours Philosophy Bangladesh",
    "React Developer Student",
    "Next.js Learner",
    "Self Taught Developer Bangladesh",
  ],
  authors: [{ name: "Muhammed Rumel" }],
  creator: "Muhammed Rumel",

  openGraph: {
    title: "Education | Muhammed Rumel",
    description:
      "Academic background and learning journey of Muhammed Rumel, MERN Stack Developer.",
    url: "https://rumel-portfolio.vercel.app/education",
    siteName: "Rumel Portfolio",
    images: [
      {
        url: "https://rumel-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Rumel Education",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Education | Muhammed Rumel",
    description:
      "Academic background and learning journey of a MERN Stack Developer from Bangladesh.",
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