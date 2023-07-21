import './style.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Post/10">Post 10</Link>
        </li>
        <li>
          <Link to="/Post">Post</Link>
        </li>
        <li>
          <Link to="/Redirect">Redirect</Link>
        </li>
      </ul>
    </nav>
  )
}