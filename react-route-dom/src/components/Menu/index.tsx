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
          <Link to="/Posts/10">Post 10</Link>
        </li>
        <li>
          <Link to="/Posts">Post</Link>
        </li>
        <li>
          <Link to="/Redirect">Redirect</Link>
        </li>
      </ul>
    </nav>
  )
}