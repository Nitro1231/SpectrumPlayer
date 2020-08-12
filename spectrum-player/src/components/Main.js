import React from 'react'
import PlayerBar from './module/PlayerBar.js'
import SideBar from './module/SideBar.js'

class Main extends React.Component {
  //https://bashooka.com/inspiration/music-video-player-ui-designs/
  //https://www.npmjs.com/package/react-player

  render() {
    return (
      <>
        <SideBar />
        <PlayerBar />
      </>
    )
  }
}

export default Main
