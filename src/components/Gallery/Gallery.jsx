import ReactImageGallery from "react-image-gallery";
import "./Gallery.scss";

const Gallery = () => {
  const images = [
    {
      original: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
      thumbnail: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
    },
    {
      original: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
      thumbnail: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
    },
    {
      original: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
      thumbnail: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
    },
    {
      original: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
      thumbnail: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
    },
    {
      original: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
      thumbnail: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
    },
    {
      original: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
      thumbnail: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
    },
    {
      original: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
      thumbnail: "https://i.etsystatic.com/19774945/r/il/003d74/2369328865/il_794xN.2369328865_hws2.jpg",
    },
  ];
  return <ReactImageGallery items={images} thumbnailPosition={"left"} infinite={false} showNav={false} useBrowserFullscreen={false} showPlayButton={false} disableThumbnailScroll={true}/>;
};

export default Gallery;
