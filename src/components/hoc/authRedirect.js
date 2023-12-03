import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";



const myStateToPropsRedirect = (state) => ({
    isFetchin: state.header.isFetchin
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isFetchin) return <Navigate to={'/login'} />
            return <Component {...this.props} />
        }

    }

    let m = connect(myStateToPropsRedirect)(RedirectComponent);
    return m;
}
