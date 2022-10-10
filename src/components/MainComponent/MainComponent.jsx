import MainCarousel from "../MainCarousel/MainCarousel";
import MainSections from "../MainSections/MainSections";

const MainComponent = () => {
  return (
    <>
      <MainCarousel />
      <MainSections
        text={
          "Jarrones y cuencos para darle un toque único y especial a todos los rincones de tu hogar"
        }
        title={"Decoración"}
        img={"https://i.imgur.com/D0Qtsy0.jpg"}
        link={"/products/deco"}
      />
    </>
  );
};

export default MainComponent;
