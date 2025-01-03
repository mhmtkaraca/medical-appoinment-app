import dynamic from "next/dynamic";
import CalendlyBadge from "./_components/CalendlyBadge";

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
const HealthAcenta = dynamic(() => import('./_components/HealthAcenta'), {
  loading: () => <p>Loading...</p>
});

const Video = dynamic(() => import('./_components/Video'), {
  loading: () => <p>Loading...</p>
});
const Intro = dynamic(() => import('./_components/Intro'), {
  loading: () => <p>Loading...</p>
});
const  TrustpilotWidget = dynamic(() => import('./client/TrustpilotWidget'), {
  loading: () => <p>Loading...</p>
});
const Card = dynamic(() => import('./_components/Card'), {
  loading: () => <p>Loading...</p>
});
const InfoCard = dynamic(() => import('./_components/InfoCard'), {
  loading: () => <p>Loading...</p>
});
export default function Page() {

  return (
    <>
      <CalendlyBadge />
      {/* <TrustpilotWidget /> */}
      <Intro />
      <Hero />
      <InfoCard />
      <Card />
      <Video/>
      <OurServices />
      <Categories />
      <HospitalList />
      <BeforeAfterComponent />
      {/* <Testimonials /> */}
      <MainGallery title="Gallery" />
      {/* <MainGallery title="Doctors" /> */}
      {/* <ClientModalComponent /> */}
      <HealthAcenta />
    </>
  );
}
