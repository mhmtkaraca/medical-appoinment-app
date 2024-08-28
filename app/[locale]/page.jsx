import dynamic from "next/dynamic";
import CalendlyBadge from "./_components/CalendlyBadge";
import Head from "next/head";

const Hero = dynamic(() => import("./_components/Hero"), {
  loading: () => <p>Loading...</p>
});
const Categories = dynamic(() => import("./categories/page"), {
  loading: () => <p>Loading categories...</p>
});
const HospitalList = dynamic(() => import("./hospitals/page"), {
  loading: () => <p>Loading hospitals...</p>
});
const BeforeAfterComponent = dynamic(() => import("./_components/BeforeAfterComponent"), {
  loading: () => <p>Loading...</p>
});
const Testimonials = dynamic(() => import("./_components/Testimonials"), {
  loading: () => <p>Loading...</p>
});
const MainGallery = dynamic(() => import("./_components/MainGallery"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const OurServices = dynamic(() => import("./_components/OurServices"), {
  loading: () => <p>Loading...</p>
});

const ClientModalComponent = dynamic(() => import('../[locale]/_components/ClientModalComponent'), {
  ssr: false,
  loading: () => <p>Loading modal...</p>
});
export default function Page() {

  return (
    
    <>
    <Head>
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
      </Head>
      <CalendlyBadge />
      <Hero />
      <OurServices />
      <Categories />
      <HospitalList />
      <BeforeAfterComponent />
      <Testimonials />
      <MainGallery title="Gallery" />
      {/* <MainGallery title="Doctors" /> */}
      <ClientModalComponent />
    </>
  );
}
