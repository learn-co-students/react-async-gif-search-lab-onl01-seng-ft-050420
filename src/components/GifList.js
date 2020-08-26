import React, { Component } from 'react'

export class GifList extends Component {
  genLis = () => {
    return this.props.urls.map((url, index) => <li key={index}><img src={url} className="img-fluid" alt="random gif"/></li>)
  }

  render() {
    return (
      <ul>
        {this.genLis()}
      </ul>
    )
  }
}

export default GifList
