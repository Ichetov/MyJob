import { Component } from "react";


class Test extends Component{
    
  mix = () =>{
    console.log(this)
  }
    render(){
         return(
            
            <button onClick = {this.mix}>
               Кнопка
            </button>
         )
    }
}

export default Test;