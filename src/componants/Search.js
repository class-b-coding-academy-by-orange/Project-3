import React, { Component } from 'react'

export default class Search extends Component {


  style = () => {
    
    return{
       
       width:'80%',
       margin:'auto',
       marginTop:'20px'
       
      
    }
}


    render() {
        
        return (
          
            <div className="input-group" style={this.style()}>
            <div className="input-group-prepend">
              <div className="input-group-text"><span role="img" aria-label="search">🔍</span></div>
            </div>
            <input type="text" className="form-control" id="searchBar" placeholder="Search .."/>
          </div>


        )
    }
}
