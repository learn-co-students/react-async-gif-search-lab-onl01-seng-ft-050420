import React from 'react'

function GifList(props) {
  let gifs = props.gifs.map((gif) => <li><img src={gif.images.original.url} /></li>)
  return (
    <ul>
      {gifs}
    </ul>
  )
}

export default GifList
