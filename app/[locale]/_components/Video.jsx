import React from 'react';

const Video = ({ src="https://www.youtube.com/embed/DFJVaV19GLc", width = "80%", height = "500px", controls = true }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <iframe
        src={src}
        width={width}
        height={height}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default Video;
// Usage example
// <Video src="/public/healthclinic.mp4" width="640" height="360" controls={true} />
// "use client";  // Ensures this is a Client Component

// import { useParams } from 'next/navigation';
// import video from '../../../public/videos/healthclinic.mp4';

// export default function VideoPlayer() {
//   const { locale } = useParams();  // Extract locale from dynamic route
  
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <video style={{ width: '90%', maxWidth: '600px', height: 'auto' }} controls>
//             <source src={video} type="video/mp4" />
//             Your browser does not support the video tag.
//         </video>
//     </div>
//   );
// }

  