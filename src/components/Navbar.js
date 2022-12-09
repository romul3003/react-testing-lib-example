import { Link } from 'react-router-dom'

const Navbar = () => (
  <>
    <Link to="/" data-testid="main-link">
      Main
    </Link>
    <p>
      <Link to="/about" data-testid="about-link">
        About
      </Link>
    </p>
    <p>
      <Link to="/users" data-testid="users-link">
        Users
      </Link>
    </p>
  </>
)

export default Navbar
