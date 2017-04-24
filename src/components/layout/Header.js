import React from 'react'
import { IndexLink, Link } from "react-router"

const Header = () => {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row py-3 border-bottom-1">
      <IndexLink className="flex-sm-fill text-sm-center nav-link" activeClassName="active" to="/">Home</IndexLink>
      <Link className="flex-sm-fill text-sm-center nav-link" activeClassName="active" to="/menu">Menu</Link>
      <Link className="flex-sm-fill text-sm-center nav-link" activeClassName="active" to="/cart">Cart</Link>
    </nav>
  )
}

export default Header