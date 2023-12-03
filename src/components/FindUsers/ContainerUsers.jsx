import { connect } from "react-redux";
import { DelUnfollow, Follow, IsFetchAc, Unfollow, changeCurrent, getUsers, setFollow, setIsFetching, setTotal, setUsers } from "../../Redux/users-reduser";
import React from "react";
import UsersPres from "./Users/UsersPres";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../hoc/authRedirect";
import { compose } from "redux";


class UsersApi extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.setIsFetching(true);
        // if (this.props.users.length === 0) {
        //     getUsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //         .then(val => {
        //             this.props.setUsers(val.items);
        //             this.props.setTotal(val.totalCount);
        //             this.props.setIsFetching(false);
        //         })
        // } else {
        //     this.props.setIsFetching(false);
        // }
    }

    openPage(num) {
        this.props.getUsers(num, this.props.pageSize);
        // this.props.setIsFetching(true);
        // this.props.changeCurrent(num);
        // axios(`https://social-network.samuraijs.com/api/1.0/users?page=${num}&count=${this.props.pageSize}`,{
        //     withCredentials: true,
        // })
        //     .then(val => {
        //         this.props.setUsers(val.data.items);
        //         this.props.setIsFetching(false);
        //     })
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader /> : null}
            <UsersPres users={this.props.users} Follow={this.props.Follow}
                Unfollow={this.props.Unfollow} currentPage={this.props.currentPage}
                openPage={this.openPage.bind(this)} totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize} IsFetchAc ={this.props.IsFetchAc} isFetch = {this.props.isFetch}
                setFollow = {this.props.setFollow} DelUnfollow = {this.props.DelUnfollow}
                 />


        </div>
    }
}



function mapStateToProps(store) {
    return {
        users: store.users.users,
        pageSize: store.users.pageSize,
        totalUsersCount: store.users.totalUsersCount,
        currentPage: store.users.currentPage,
        isFetching: store.users.isFetching,
        isFetch: store.users.isFetch,
    }

}

// function mapDispatchToProps(dispatch) {
//     return {
//         follow: (id) => {
//             dispatch(Unfollow(id))
//         },
//         unfollow: (id) => {
//             dispatch(Follow(id))
//         },
//         setUs: (data) => {
//             dispatch(setUsers(data))
//         },
//         changeCurrent: (num) => {
//             dispatch(changeCurrent(num))
//         },
//         setTotalUsers: (total) => {
//             dispatch(setTotal(total))
//         },
//         setIsFetching: (sti)=>{
//             dispatch(setIsFetching(sti))
//         }
//     }
// }


// export default connect(mapStateToProps, {
//     Unfollow, Follow, setUsers, changeCurrent, setTotal, setIsFetching, IsFetchAc, getUsers,setFollow, DelUnfollow
// })(UsersApi)


export default compose(
    connect(mapStateToProps, {
        Unfollow, Follow, setUsers, changeCurrent, setTotal, 
        setIsFetching, IsFetchAc, getUsers,setFollow, DelUnfollow
    }),withAuthRedirect,
    )(UsersApi)