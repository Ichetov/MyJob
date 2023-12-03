import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { HeaderTh, OutLoginRed, setAuthMe } from "../../Redux/header-reducer";




class ContainerHeader extends React.Component {

 

  render() {
    return (
      <Header {...this.props} />

    )
  }
}

function mapStateToProps(state) {
  return {
     login: state.header.login,
     isFetchin: state.header.isFetchin,
  }
}


export default connect(mapStateToProps, {setAuthMe, HeaderTh,OutLoginRed})(ContainerHeader)



