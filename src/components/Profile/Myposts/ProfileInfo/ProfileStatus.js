import React from "react";



class ProfileStatus extends React.Component {
  
    state = {
        test: true,
        text: this.props.status 
    }

    setData() {
        this.setState({
            test: false,
        })
    }

    addData() {
        this.setState({
            test: true,
        })
        this.props.updateStatus(this.props.status)
    }

    mix(text){
      this.setState({
        text: text
      })
    }

    componentDidUpdate(prevProps, prevState){
       if(prevProps.status !== this.props.status){
        this.setState({
            text: this.props.status
        })
       }
    }

    render() {
        return (
            <div>
                {this.state.test ? <div>
                    <span onClick={
                        this.setData.bind(this)
                    }>{this.props.status || 'привет'}</span>
                </div> : <div>
                    <input autoFocus = {true} onBlur={ this.addData.bind(this)} onChange={(e)=>{
                      this.mix(e.target.value)
                    }} value={this.state.text}></input>
                </div>}


            </div>
        )
    }

}

export default ProfileStatus;