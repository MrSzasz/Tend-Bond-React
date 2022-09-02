import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const ProductDetails = () => {
  return (
    <div>
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href="https://i.imgflip.com/3f0mvv.jpg">
          <img className="w-24 h-24 object-cover" alt="img1" src="https://i.imgflip.com/3f0mvv.jpg" />
        </a>
        <a href="https://preview.redd.it/3wabtadfycj41.jpg?auto=webp&s=209cbc600a0335da2b1918007f9912a2bb4835b8">
          <img className="w-24 h-24 object-cover"  alt="img2" src="https://preview.redd.it/3wabtadfycj41.jpg?auto=webp&s=209cbc600a0335da2b1918007f9912a2bb4835b8" />
        </a>
      </LightGallery>
      <ProductsCarousel title={"También te puede interesar"} />
    </div>
  );
};

export default ProductDetails;
