import { Link } from "react-router-dom"

const MainButton = ({ link }) => {
  return (
    <Link to={link} className="tbBtn mt-3 w-max">Ver más</Link>
  )
}

export default MainButton