import { Link } from "react-router-dom"

const MainButton = ({ fn, link = "#", text = 'Ver más' }) => {
  return (
    <Link onClick={fn} to={link} className="tbBtn mt-3 w-max">{text}</Link>
  )
}

export default MainButton