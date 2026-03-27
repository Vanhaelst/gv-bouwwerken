import { Red_Hat_Text } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import { Navigation } from "@/components/organisms/navigation";
import Footer from "@/components/molecules/footer";
import { Cookiebot } from "@/components/organisms/Cookiebot";
import Head from "next/head";

const redHatText = Red_Hat_Text({
  variable: "--font-red_hat_text",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata =
  process.env.NEXT_PUBLIC_SITE === "gvInvest"
    ? {
        title: "GV Invest | Metsel-, Beton- en Bouwprojecten",
        description:
          "De focus van  GV Invest ligt op metsel- en betonwerken en op volledige bouwprojecten zoals nieuwbouw en renovatie.",
        keywords:
          "invest, investeren, bouwwerken, metsel, beton, bouwprojecten, nieuwbouw, renovatie, regio leest mechelen",
        locale: "nl-NL",
        type: "website",
        robots: "index, follow",
        site_name: "GV INVEST",
        logo: "/logo.png",
      }
    : {
        title: "Bouwwerken GV | Metsel-, Beton- en Bouwprojecten",
        description:
          "De focus van bouwwerken Glenn Verhasselt ligt op metsel- en betonwerken en op volledige bouwprojecten zoals nieuwbouw en renovatie. Regio Leest Mechelen",
        keywords:
          "bouwwerken, metsel, beton, bouwprojecten, nieuwbouw, renovatie, regio leest mechelen",
        locale: "nl-NL",
        type: "website",
        robots: "index, follow",
        site_name: "Bouwwerken GV",
        logo: "/logo.png",
      };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION && (
        <meta
          name="facebook-domain-verification"
          content={process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION}
        />
      )}
      {process.env.NEXT_PUBLIC_GTM && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      )}
      <body className={`${redHatText.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Cookiebot />
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL && (
          <noscript>
            <img
              alt="facebook pixell"
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL}8&ev=PageView&noscript=1`}
            />
          </noscript>
        )}
      </body>
      {process.env.NEXT_PUBLIC_COOKIE_SCRIPT && (
        <Script
          type=" text/javascript"
          charset=" UTF-8"
          src={`//cdn.cookie-script.com/s/${process.env.NEXT_PUBLIC_COOKIE_SCRIPT}.js`}
        />
      )}
    </html>
  );
}
