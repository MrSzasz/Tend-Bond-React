import { Link } from "react-router-dom"

const MainButton = ({ fn, link = "#", text = 'Ver más' }) => {
  return (
    <Link onClick={fn} to={link} className="tbBtn text-center text-sm md:text-lg mt-3 w-full md:w-max mx-auto px-4">{text}</Link>
  )
}

export default MainButton