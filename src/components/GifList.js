import React from 'react'

export default class GifList extends React.Component {
  render() {
    let gifs = this.props.gifs.map((gif) => <li><img src={gif.images.original.url} /></li>)
    return (
      <ul>
        {gifs}
      </ul>
    )
  }
}
