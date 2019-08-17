import React, { Component } from 'react'

export default class VideoDiscription extends Component {
    style = () => {
        return{
           backgroundColor: 'gray',
           border : '1px black solid',
           height: '20vh',
           margin: '7px',
          
        }
    }
    render() {
        const {dis}=this.props;
        return (

            <>
           
                 { dis.map((elem,index )=> {
                     if (index===2){

                        return (
                            <p>{elem}</p>
                            
                            
                            )
                     }
               
                
                }) } 

            </>
        )
    }
}
