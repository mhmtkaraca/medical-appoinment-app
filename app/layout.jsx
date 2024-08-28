import { Roboto } from "next/font/google";
import "./[locale]/globals.css";
import Header from "./[locale]/client/Header";
import WhatsAppIcon from "./[locale]/_components/WhatsAppIcon";
import Footer from "./[locale]/_components/Footer";
import Head from "next/head";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Top-Notch Patient Experience in Turkiye",
  description: "Generated by create next app",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
       <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1568356953733232');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1568356953733232&ev=PageView&noscript=1"
          />
        </noscript>
      {/* End Meta Pixel Code */}
      </head>
      <body className={roboto.className}>
        <Header />
        {children}
        <WhatsAppIcon />
        <Footer />
      </body>
    </html>
  );
}
