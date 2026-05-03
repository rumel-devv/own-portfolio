import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/NextThemeProvider";

export default function AboutLayout({ children }) {
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