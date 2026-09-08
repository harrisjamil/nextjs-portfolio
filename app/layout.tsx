import type { Metadata } from "next";
import { Big_Shoulders, Host_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import "./globals.css";

const host = Host_Grotesk({
  variable: "--font-host",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const shoulders = Big_Shoulders({
  variable: "--font-shoulders",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    default: "Harris — Software Developer Portfolio",
    template: "%s",
  },
  description:
    "Harris builds modern software, AI-powered tools, and secure systems for startups and teams that need reliable engineering.",
  icons: { icon: "/images/nav-avatar.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${host.variable} ${shoulders.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-bg font-sans text-fg" suppressHydrationWarning>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
