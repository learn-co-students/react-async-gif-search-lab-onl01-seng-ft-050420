import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar title="Gif Search" />
        <GifListContainer />
      </div>
    )
  }
}

