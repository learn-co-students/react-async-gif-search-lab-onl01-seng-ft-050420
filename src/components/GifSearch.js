import React, { Component } from 'react'

export class GifSearch extends Component {
  render() {
    return (
      <form 
        onSubmit={e => this.props.handleSubmit(e)}>
        <label htmlFor="query">Enter a Search Term:</label>
        <input 
          type="text" 
          name="query" 
          onChange={e => this.props.handleChange(e)} />
        <input type="submit" value="Find Gifs"/>
      </form>
    )
  }
}

export default GifSearch
