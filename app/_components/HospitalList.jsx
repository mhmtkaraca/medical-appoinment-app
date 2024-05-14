import Image from "next/image";
import { data } from "../_mocks_/HospitalData";

const HospitalList = () => {
  return (
    <div className="container mx-auto p-8 mb-10">
      <h2 className="font-bold text-2xl mb-4">Our Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {data &&
          data.map((doctor, i) => (
            <div
              key={doctor.name}
              className="bg-white shadow-md rounded-lg p-4 md:p-6 lg:p-8"
            >
              <Image
                src={doctor.image}
                alt="Doctor"
                width={500}
                height={200}
                className="w-full h-48 object-top md:h-64 lg:h-80 object-cover rounded-t-lg"
              />

              <div className="mt-4 md:mt-6 lg:mt-8">
                <h2
                  key={i}
                  className="text-xs bg-blue-100 p-1 rounded-full px-2 text-primary mr-2"
                >
                  {doctor.fields}
                </h2>

                <h2 className="font-bold text-lg">{doctor.name}</h2>
                <h2 className="text-primary text-sm">{doctor.adress}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HospitalList;