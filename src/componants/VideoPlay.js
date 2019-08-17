import React, { Component } from 'react'

export default class VideoPlay extends Component {
    style = () => {
        return{
           backgroundColor: 'red',
           border : '1px black solid',
           height: '60vh',
           margin: '7px',
          
        }
    }

    player = () => { alert('hello')}


    render() {
        
        return (
            <div style={this.style()}>
                <iframe title={'Video Play'} width="100%" height="100%" src="https://www.youtube.com/embed/j4KR2lq9xIM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>                 
            
   



                
            </div>
        )
    }
}
