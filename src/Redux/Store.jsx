// let messages = [
//     {text: 'Hi', id: 1},
//     {text: 'Hello', id: 2},
//     {text: 'Post my life', id: 3},
//   ];

import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reduser";

  
//   let dialogs = [
//     {name: 'Dimich', id: 1},
//     {name: 'Sveta', id: 2},
//     {name: 'Igor', id: 3},
//   ]
  
//   let post = [
//     {text: 'Как дела?', id: 1},
//     {text: 'Всё ок', id: 2},
//   ]


let store = {
_state:  {
    messagesPage: {
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
    },
   
    profile: {
      post :[
      {text: 'Как дела?', id: 1},
      {text: 'Всё ок', id: 2},
      
    ],
    text: 'Введи текст',
    
  },
 
   
    }, 
 _callSubscriber(){
    console.log('Нет подписки')
  },
     addText(val){
   
     },
    getState(){
     return this._state;
    },
   
    subscribe(observer){
      this._callSubscriber = observer;
    },
   addPost(){
  
 },
 disptch(action){
    
     ProfileReducer(this._state.profile, action);
     DialogsReducer(this._state.messagesPage, action);
 
 this._callSubscriber(this._state);
  
 }
}


  export default store;