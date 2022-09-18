import Gallery from "../Gallery/Gallery";


const ProductDetails = () => {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
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
        <Gallery/>
        </div>
        <div className="bg-green-500">right</div>
    </div>
  )
}

export default ProductDetails