import Cart from "../Cart/Cart"
import MainComponent from "../MainComponent/MainComponent"
import ProductsContainer from "../ProductsContainer/ProductsContainer"

const MainContainer = () => {
  return (
    <main className="min-h-screen h-min bg-white">
        <MainComponent/>
        <Cart/>
    </main>
  )
}

export default MainContainer