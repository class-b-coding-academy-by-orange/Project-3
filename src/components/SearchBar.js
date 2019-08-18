import React, { Component } from 'react';
class SearchBar extends Component {

    state = {
      videos: []
    };
 
    render() {
        return(
            <div style={{ "textAlign": "center", "background": "#123456", "padding": "35px" }}>
               
                <input
                    type="text"
                    style={{ width: 400 }}
                    onSelect={ this.onSelect }
                    onChange={ this.props.onChange }
                    placeholder="Search Video"
                >
                </input>
                <button style={{ "marginLeft":"5px" }} >Search</button>
                
            </div>
            
        );
    }
}

export default SearchBar;
