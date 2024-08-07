import Image from "next/image";
import { getTestimonials } from "../_utils/GlobalApi";
import { getI18n } from "@/locales/server";

const Testimonials = async () => {
  const data = await getTestimonials();
  const t = await getI18n();

  return (
    <div className="mx-auto max-w-screen-xl px-5 py-12">
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {t("testimonials")}
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {data.map((item) => (
          <blockquote
            key={item.id}
            className="w-full md:w-full lg:w-80 px-4 mb-8"
          >
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 h-full ">
              <div className="flex items-center gap-4">
                <Image
                  alt=""
                  src={item.attributes?.image?.data?.attributes?.url}
                  width={100}
                  height={100}
                  className="size-14 rounded-full object-cover object-top"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                  loading="lazy"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    {[5, 5, 5, 5, 5].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    {item?.attributes?.clientName}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700 text-justify">
                {item?.attributes?.content}
              </p>
            </div>
          </blockquote>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
