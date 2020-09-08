import React from 'react'

export default function NavBar(props) {
  return (
    <nav className={"navbar"}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand'>
            {props.title}
          </a>
        </div>
      </div>
    </nav>
  )
}
