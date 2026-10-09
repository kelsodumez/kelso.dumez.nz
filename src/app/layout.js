import './app.css';
import Navbar from "../components/navbar";

export const metadata = {
    title: "Kelso du Mez",
    description: "Game developer & Graphic Designer specialising in UI based in Ōtautati Christchurch",
    keywords: "Kelso du Mez, Game Developer, Game UI, UI, Christchurch, Ōtautahi, Unity Developer, New Zealand, Developer, Graphic Design",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow"
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
          <title>Kelso du Mez</title>
          <meta name="google-site-verification" content="nepHzCd3kLgbsMerKFsSTE9wv2x54KRa9sF2bX0arVQ"/>
          <meta name="msvalidate.01" content="7BC3B1435A92F48144F97876DF237EC7"/>
          <link rel="icon" href="/src/app/icon.svg" type="image/svg+xml"/>
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
      </head>
      <body>
      <Navbar/>
      <div className="content">{children}</div>
      </body>
      </html>
  );
}