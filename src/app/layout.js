import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/organisms/navigation";
import Footer from "@/components/molecules/footer";

const redHatText = Red_Hat_Text({
  variable: "--font-red_hat_text",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = process.env.NEXT_PUBLIC_SITE === "gvInvest" ?
    {
        title: "GV Invest | Metsel-, Beton- en Bouwprojecten",
        description: "De focus van  GV Invest ligt op metsel- en betonwerken en op volledige bouwprojecten zoals nieuwbouw en renovatie.",
        keywords: "invest, investeren, bouwwerken, metsel, beton, bouwprojecten, nieuwbouw, renovatie, regio leest mechelen",
        locale: "nl-NL",
        type: "website",
        robots: "index, follow",
        site_name: "GV INVEST",
        logo: "/logo.png",
    } : {
        title: "Bouwwerken GV | Metsel-, Beton- en Bouwprojecten",
        description: "De focus van bouwwerken Glenn Verhasselt ligt op metsel- en betonwerken en op volledige bouwprojecten zoals nieuwbouw en renovatie. Regio Leest Mechelen",
        keywords: "bouwwerken, metsel, beton, bouwprojecten, nieuwbouw, renovatie, regio leest mechelen",
        locale: "nl-NL",
        type: "website",
        robots: "index, follow",
        site_name: "Bouwwerken GV",
        logo: "/logo.png",
    };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${redHatText.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
