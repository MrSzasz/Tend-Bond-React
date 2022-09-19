import Gallery from "../Gallery/Gallery";
import { BsCircleFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import MainButton from "../MainButton/MainButton";

const ProductDetails = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    //     <div className="w-[90%] m-auto h-screen grid grid-cols-2">
    //         <div className="bg-blue-500 grid grid-cols-4">
    //             <div className="bg-red-500 flex flex-col">
    // <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheBindingOfIsaacAfterbirthPlus_image1600w.jpg" alt="" />
    // <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheBindingOfIsaacAfterbirthPlus_image1600w.jpg" alt="" />
    // <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheBindingOfIsaacAfterbirthPlus_image1600w.jpg" alt="" />
    // <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheBindingOfIsaacAfterbirthPlus_image1600w.jpg" alt="" />
    // <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheBindingOfIsaacAfterbirthPlus_image1600w.jpg" alt="" />
    // <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheBindingOfIsaacAfterbirthPlus_image1600w.jpg" alt="" />
    //             </div>
    //             <div className="bg-purple-400 col-start-2 col-end-5" ></div>
    //         </div>
    //         <div className="bg-green-500">right</div>
    //     </div>
    <div className="w-[90%] m-auto h-screen grid grid-cols-2">
      <div className="bg-blue-500">
        <Gallery />
      </div>
      <div className="bg-green-500">
        <div className="border-b border-tbMain">
          <h2>Pulsera Lucy</h2>
          <p>$1500</p>
        </div>
        <div className="productInfo">
          <div className="color">
            <h5>color</h5>
            <div className="flex">
              <BsCircleFill />
              <BsCircleFill />
              <BsCircleFill />
            </div>
          </div>
          <div className="size">
            <h5>talle</h5>
            <div className="sizePicker">
              <button className="border-b border-gray-600">S</button>
              <button>M</button>
              <button>L</button>
            </div>
          </div>
          <div className="qty">
            <h5>cantidad</h5>
            <div>
              <button>-</button>
              <input type="number" value={1} />
              <button>+</button>
            </div>
          </div>
          <div className="desc">
            <h5>descripción</h5>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro in
            nobis repellat. Iure quisquam voluptatem nesciunt earum eum ex
            mollitia.
          </div>
          <MainButton link={'www.google.com'} text={'agregar al carrito'}/>
          <div className="bottom">
            <p className="flex items-center gap-1">cuidados y composición <AiOutlineDown size={13} /></p>
            <p className="flex items-center gap-1">política de devolución <AiOutlineDown size={13} /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
