import { getUsersAPI } from "../components/api/api";

const ADD_FOLLOW = 'ADD_FOLLOW';
const ADD_UNFOLLOW = 'ADD_UNFOLLOW';
const ADD_USERS = 'ADD-USERS';
const CARRENT_PAGE = 'CARRENT-PAGE';
const SET_TOTAL_USER = 'SET-TOTAL-USER';
const SET_IS_FETCH = 'SET-IS-FETCH';
const SET_FETCH = 'SET-FETCH';

let inital = {

    users: [

    ],
    pageSize: 6,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true,
    isFetch: [],
}

const UsersReducer = (state = inital, action) => {

    switch (action.type) {
        case ADD_FOLLOW: {
            let newState = {
                ...state, users: state.users.map(i => {
                    if (i.id === action.id) return { ...i, followed: true };
                    return i
                })
            }
            return newState;
        }
        case ADD_UNFOLLOW:
            let newState = {
                ...state, users: state.users.map(i => {
                    if (i.id === action.id) return { ...i, followed: false };
                    return i
                })
            }
            return newState;
        case ADD_USERS:
            return { ...state, users: action.users }

        case CARRENT_PAGE:
            return { ...state, currentPage: action.num }

        case SET_TOTAL_USER:
            return { ...state, totalUsersCount: action.num }

        case SET_IS_FETCH:
            return { ...state, isFetching: action.isf }
        case SET_FETCH:
            return { ...state, isFetch: action.bool ? [...state.isFetch, action.id] : state.isFetch.filter(id => id !== action.id) }

        default:
            return state;
    }


}


export let IsFetchAc = (bool, id) => (

    {
        'type': SET_FETCH,
        bool,
        id
    }
);

export let Unfollow = (id) => (

    {
        'type': ADD_UNFOLLOW,
        'id': id
    }
);
export let Follow = (id) => (
    {
        'type': ADD_FOLLOW,
        'id': id
    }
)

export let setUsers = (user) => {
    return {
        type: ADD_USERS,
        users: user
    }
}

export let changeCurrent = (num) => {
    return {
        type: CARRENT_PAGE,
        num
    }
}

export let setTotal = (num) => {
    return {
        type: SET_TOTAL_USER,
        num
    }
}

export let setIsFetching = (isf) => {
    return {
        type: SET_IS_FETCH,
        isf: isf
    }
}


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(setIsFetching(true));

        getUsersAPI.getUsers(currentPage, pageSize)
            .then(val => {
                dispatch(setUsers(val.items));
                dispatch(setTotal(val.totalCount));
                dispatch(setIsFetching(false));
                dispatch(changeCurrent(currentPage))
            })

    }
}

export const setFollow = (id) => {
    return (dispatch) => {
        dispatch(IsFetchAc(true, id))
        getUsersAPI.follow(id)
            .then(data => {
                dispatch(IsFetchAc(false, id))
                if (data.resultCode === 0) {
                    dispatch(Follow(id))
                }
            })
    }
}

export const DelUnfollow = (id) => {
    return (dispatch) => {
        dispatch(IsFetchAc(true, id))
        getUsersAPI.unfollow(id)
            .then(val => {
                dispatch(IsFetchAc(false,id))
                if (val.resultCode === 0) {
                   dispatch(Unfollow(id))
                }
            })
    }
}

export default UsersReducer;