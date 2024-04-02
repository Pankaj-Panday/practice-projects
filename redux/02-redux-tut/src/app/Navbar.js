import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Demo 2</h1>

        <div className="navContent">
          <div className="navLinks">
            <div className="navLinks">
              <Link to="/">Posts</Link>
            </div>
          </div>
        </div>
      </section>
    </nav>
  )
}
