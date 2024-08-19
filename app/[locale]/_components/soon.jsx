
import Image from 'next/image';
import sooon from '../../../public/images/soon.jpeg';

export default function soon() {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <Image
        src={sooon}
        alt="Health Hub Türkiye"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 text-center text-white bg-black bg-opacity-50 p-6 mb-96 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <div className="text-lg">
          <p>
            Phone: <a href="tel:+90 242 725 51 51" className="underline">0242 725 51 51</a>
          </p>
          <p>
            Email: <a href="mailto:info@healthhubturkiye.com" className="underline">info@healthhubturkiye.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
