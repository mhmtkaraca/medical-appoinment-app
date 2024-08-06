const GoogleMap = () => {
  return (
    <iframe
      className="border-none my-20 mb-20"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.9484823760083!2d30.73508241570241!3d36.882009479936555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38534b0ed8ea9%3A0xbf520557b56e0a40!2sTar%C4%B1m%2C%20Perge%20Blv.%20No%3A45%2C%2007200%20Muratpa%C5%9Fa%2FAntalya!5e0!3m2!1str!2str!4v1714655406296!5m2!1str!2str"
      width="100%"
      height="350"
      style={{
        allowFullScreen: "",
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
      }}
    />
  );
};

export default GoogleMap;
