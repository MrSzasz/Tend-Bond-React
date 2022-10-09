import ReactImageGallery from "react-image-gallery";
import "./Gallery.scss";

const Gallery = ({ photos }) => {
  return (
    <ReactImageGallery
      items={photos}
      thumbnailPosition={"left"}
      infinite={false}
      showNav={false}
      useBrowserFullscreen={false}
      showPlayButton={false}
      disableThumbnailScroll={true}
    />
  );
};

export default Gallery;
