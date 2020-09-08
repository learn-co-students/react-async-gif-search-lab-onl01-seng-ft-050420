import React from 'react'

export default class GifSearch extends React.Component {
  state = {
    query: ""
  }

  changeHandler = (e) => {
    this.setState({ query: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state.query)
    this.setState({ query: "" })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" placeholder="search" value={this.state.query} onChange={this.changeHandler} />
        <input type="submit" value="search" />
      </form>
    )
  }
}
