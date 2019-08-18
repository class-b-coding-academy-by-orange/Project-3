import React, { Component } from 'react';
 //import { Button } from 'react-bootstrap';


const styl={ width: "90%", borderRadius: 10 }



export default class Search extends Component {
  state = {
    term: '',
  }

  search = (e) => {
    this.setState({
      term: e.target.value
    })}

    reset = () => {
      this.setState({
        term: ''
      })}
  


  render() {
    const { term } = this.state
    return (
      <div >

        <input value={term} onChange={this.search} style={styl} placeholder="search on youtube" />
        <button  className="rounded-pill" onClick={this.props.onchange.bind(this, term,this.reset)} >Search</button>

      </div>
    );
  }


}