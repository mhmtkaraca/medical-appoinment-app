import React from 'react';

const Video = ({ src="https://www.youtube.com/embed/h2P0B1yBLa4", width = "100%", height = "500px", controls = true }) => {
    return (
        <div>
            <iframe
                width={width}
                height={height}
                src={src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Video;
// Usage example
// <Video src="/public/healthclinic.mp4" width="640" height="360" controls={true} />