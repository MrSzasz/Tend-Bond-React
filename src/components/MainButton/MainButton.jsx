import { Link } from "react-router-dom"

const MainButton = ({ link, text = 'Ver más' }) => {
  return (
    <Link to={link} className="tbBtn mt-3 w-max">{text}</Link>
  )
}

export default MainButton