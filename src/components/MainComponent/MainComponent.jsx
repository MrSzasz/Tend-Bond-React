import MainCarousel from "../MainCarousel/MainCarousel";
import Carousel from "../Carousel/Carousel";
import MainSections from "../MainSections/MainSections";

const MainComponent = () => {
  return (
    <>
      <MainCarousel />
      <Carousel />
      <MainSections
        text={"lorem y otras cosas que ponemos en el texto de ejemplo"}
        title={"Accesorios"}
        img={"https://picsum.photos/250/250/?random=1"}
        link={"https://www.google.com.ar"}
      />
      <MainSections
        text={"lorem y otras cosas que ponemos en el texto de ejemplo"}
        title={"Indumentaria"}
        img={"https://picsum.photos/250/250/?random=1"}
        link={"https://www.google.com.ar"}
      />
      <MainSections
        text={"lorem y otras cosas que ponemos en el texto de ejemplo"}
        title={"Zapatos"}
        img={"https://picsum.photos/250/250/?random=1"}
        link={"https://www.google.com.ar"}
      />
    </>
  );
};

export default MainComponent;
