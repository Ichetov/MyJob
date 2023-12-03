import { connect } from "react-redux";
import { ProfileTh, StatusTh, addPostActionCreatot, addProfile, addStatusProfile, addTextActionCreator, updateStatus } from "../../../../Redux/profile-reduser";
import MyPost from "../MyPost";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import React from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/authRedirect";
import { compose } from "redux";


function ProfileId(props) {
    let { userId } = useParams();
    let z = { ...props, userId }
    return (
        <>
            <ProfileConteiner {...z} />
        </>
    )
}



class ProfileConteiner extends React.Component {

    componentDidMount() {
        this.props.ProfileTh(this.props.userId);
        this.props.StatusTh(this.props.userId);
    }

    render() {
        return (<>
            <ProfileInfo {...this.props} />
            <MyPost  {...this.props} />
        </>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        state: state.profile,
        isFetching: state.header.isFetching,
        status: state.profile.status
    }
}

// let AuthRedirect = withAuthRedirect(ProfileId)



// export default connect(mapStateToProps, {
//     addPostActionCreatot, addTextActionCreator,
//     addProfile,ProfileTh
// })(AuthRedirect)


export default compose(
    connect(mapStateToProps, {
        addPostActionCreatot, addTextActionCreator,
        addProfile,ProfileTh,StatusTh,updateStatus
    }),
    withAuthRedirect,
)(ProfileId)