
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';


let initial = {

        messages: [
       {text: 'Hi', id: 1},
       {text: 'Hello', id: 2},
       {text: 'Post my life', id: 3},
     ],dialogs : [
       {name: 'Dimich', id: 1},
       {name: 'Sveta', id: 2},
       {name: 'Igor', id: 3},
     ],
     text: 'Написать сообщение',
     
}

const DialogsReducer = (state = initial, action) => {
  console.log(1)
    switch (action.type) {
        case UPDATE_NEW_POST_MESSAGE:
            
            return {...state, text: action.text}
        case ADD_MESSAGE:{
            let id = state.messages.length + 1;
           
       
            return  {...state, text: '', messages: [...state.messages, { text: state.text, id: id }]};
        }
        default:
            return state;
    }
}

export let addMessageActionCreator = (text) => (
    {
        'type': UPDATE_NEW_POST_MESSAGE,
        'text': text
    })

export let addMessagesActionCreator = () => (
    { 'type': ADD_MESSAGE }
)

export default DialogsReducer;