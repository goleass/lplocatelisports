import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Locateli Sports",
  description: "Nós produzimos seu material 100% personalizado",
  openGraph: {
    title: "Locateli Sports",
    description: "Nós produzimos seu material 100% personalizado",
    url: "https://locatelisports.com.br",
    siteName: "Locateli Sports",
    images: [
      {
        url: "https://locatelisports.com.br/og-image.jpg",
        width: 800,
        height: 800,
        alt: "Locateli Sports Logo",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@LocateliSports",
  //   title: "Locateli Sports",
  //   description: "Nós produzimos seu material 100% personalizado",
  //   image: "/og-image.jpg",
  // },
  // Outras meta tags relevantes
  robots: "index, follow", // Permite que os motores de busca indexem e sigam os links
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Favicon padrão */}
        <link rel="icon" href="/favicon.ico" />

        {/* Favicon 32x32 */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        {/* Favicon 16x16 */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Favicon para dispositivos Apple */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Ícones para Android */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />

        {/* Manifesto do site */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
