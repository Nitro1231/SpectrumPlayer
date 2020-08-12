import React from 'react'
import playing from './ico/Playing.svg'
import browse from './ico/Browse.svg'
import home from './ico/Home.svg'
import library from './ico/Library.svg'

class SideNav extends React.Component {
  render() {
    return (
      <>
        <div class='sidebar'>
          <img src={playing} width='50px' height='50px' />
          <img src={browse} width='50px' height='50px'></img>
          <img src={home} width='50px' height='50px'></img>
          <img src={library} width='50px' height='50px'></img>
          <a href='#'>Playing</a>
          <a href='#'>Home</a>
          <a href='#'>Browse</a>
          <a href='#'>Library</a>
        </div>
      </>
    )
  }
}

export default SideNav
