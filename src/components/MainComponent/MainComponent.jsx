import MainCarousel from "../MainCarousel/MainCarousel";
import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";
import MainSections from "../MainSections/MainSections";

const MainComponent = () => {
  return (
    <>
      <MainCarousel />
      <ProductsCarousel title="New arrivals" />
      <MainSections
        text={"lorem y otras cosas que ponemos en el texto de ejemplo"}
        title={"Accesorios"}
        img={"http://placeimg.com/700/400/nature"}
        link={"/products"}
      />
      <MainSections
        text={"lorem y otras cosas que ponemos en el texto de ejemplo"}
        title={"Indumentaria"}
        img={"http://placeimg.com/700/400/any"}
        link={"/products"}
      />
      <MainSections
        text={"lorem y otras cosas que ponemos en el texto de ejemplo"}
        title={"Zapatos"}
        img={"http://placeimg.com/700/400/architecture"}
        link={"/products"}
      />
    </>
  );
};

export default MainComponent;
