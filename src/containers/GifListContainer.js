import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export class GifListContainer extends Component {
  state = {
    query: '',
    urls: [],
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=BipFWcQqBhaWGDHhbp5b2LH4ZZQz1RZt`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          urls: json.data.slice(0, 3).map(obj => obj.images.original.url)
        })
      })
  }

  render() {
    return (
      <div>
        <GifSearch 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
        <GifList urls={this.state.urls}/>
      </div>
    )
  }
}

export default GifListContainer
