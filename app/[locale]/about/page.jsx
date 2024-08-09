import Link from "next/link";
import { getLogo } from "../_utils/GlobalApi";
import { getI18n } from "@/locales/server";
import Testimonials from "../_components/Testimonials";

const About = async () => {
  const logoData = await getLogo();
  const t = await getI18n();

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-[url(https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat">
          <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              {t("about")}
              </h2>

              <p className="hidden  text-white/70 md:mt-6 md:block md:text-lg md:leading-relaxed">
              {t("aboutText")}
              </p>

              <div className="mt-4 sm:mt-8">
                <Link
                  href="contact"
                  className="inline-block rounded-md bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary/90 focus:outline-none focus:ring"
                >
                 {t("contactUs")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold sm:text-4xl">{t("ourVision")}</h2>
          <p className="mt-4 text-gray-600">{t("visionContent")}</p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold sm:text-4xl">{t("ourMission")}</h2>
          <p className="mt-4 text-gray-600">{t("missionContent")}</p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold sm:text-4xl">{t("ourCulture")}</h2>
          <p className="mt-4 text-gray-600">{t("cultureContent")}</p>
        </div>

        <Testimonials />

      
      </div>
    </div>
  );
};

export default About;
