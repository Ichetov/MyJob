import { profileAPI, statusAPI } from "../components/api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';
const ADD_STATUS = 'ADD-STATUS';


let inital = {

    post: [
        { text: 'Как дела?', id: 1 },
        { text: 'Всё ок', id: 2 },

    ],
    text: 'Введи текст',
    profileData: null,
    status: 'Не пришли'
}

const ProfileReducer = (state = inital, action) => {
    console.log(3)
    switch (action.type) {
        case ADD_POST: {
            let id = state.post.length + 1;
            return { ...state, text: '', post: [...state.post, { text: state.text, id: id }] }
        }
        case UPDATE_NEW_POST_TEXT:
            return { ...state, text: action.text }
        case SET_PROFILE:
            return { ...state, profileData: action.data }
        case ADD_STATUS:
            return { ...state, status: action.status }
        default:
            return state;
    }


}

export let addPostActionCreatot = () => (

    { 'type': ADD_POST, }
);
export let addTextActionCreator = (text) => (
    {
        'type': UPDATE_NEW_POST_TEXT,
        'text': text
    }
)
export let addProfile = (data) => (
    {
        'type': SET_PROFILE,
        data
    }
)

export let addStatusProfile = (status) => (
    {
        'type': ADD_STATUS,
        status
    }
)


export const ProfileTh = (id) => {
    return (dispatch) => {
        profileAPI.addProfile(id)
            .then(data => {
                dispatch(addProfile(data));

            })
    }
}


export const StatusTh = (id) => {
    return (dispatch) => {
        statusAPI.addStatus(id)
            .then(data => {
                dispatch(addStatusProfile(data))
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
     
        statusAPI.updateStatus(status)
            .then(val => {
                console.log(val)
                if (val === 0) {
                    dispatch(addStatusProfile(status))
                }
            })
    }
}

export default ProfileReducer;