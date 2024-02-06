import { Metadata } from "next";
import { Locale, i18n } from "../../../i18n-config";

export const metadata: Metadata = {
  title: "i18n within app directory - Vercel Examples",
  description: "How to do i18n in Next.js 13 within app directory",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children, params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale }
}>) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
