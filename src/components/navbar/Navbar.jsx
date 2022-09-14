import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <p className="logo">GO <span className="go">GO </span></p>
        <div className="navItems">
          <button className="navButton">SignUp</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar