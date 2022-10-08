import MainCarousel from "../MainCarousel/MainCarousel";
import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";
import MainSections from "../MainSections/MainSections";

const MainComponent = () => {
  return (
    <>
      <MainCarousel />
      {/* <ProductsCarousel title="New arrivals" /> */}
      <MainSections
        text={"Jarrones y cuencos para darle un toque único y especial a todos los rincones de tu hogar"}
        title={"Decoración"}
        img={"https://i.imgur.com/D0Qtsy0.jpg"}
        link={"/products/deco"}
      />
      {/* <MainSections
        text={"Accesorios para complementar y darle onda a todos tus looks"}
        title={"Accesorios"}
        img={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQI6l0AgxfPSyTF4qum4019sQ9Y1txjpVH5RekuJjQH6Gwr2oHiOlJ_nFH81RzYoqxxh6fORDvP_Vg1odIj3Wbp8JlxHvIAB_7sJUF8lrR6ff1sfJH5-jQEuw&usqp=CAE"}
        link={"/products/accesorios"}
      /> */}
      {/* <MainSections
        text={"lorem y otras cosas que ponemos en el texto de ejemplo"}
        title={"Aros"}
        img={"http://placeimg.com/700/400/architecture"}
        link={"/products/accesorios"}
      /> */}
    </>
  );
};

export default MainComponent;
