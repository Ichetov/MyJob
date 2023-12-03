import obj from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogsItem';
import { createRef } from 'react';
import { Navigate } from 'react-router-dom';






const Dialogs = (props: any)=>{
     let m = createRef<HTMLTextAreaElement>()
     let z = props.dialogs.map((item: any) => <DialogItem key = {item.id} name = {item.name} id = {item.id}/>)
    
    return(
        <div className={obj.dialogs}>
           
            <div className={obj.dialogsItems}>
                {z}
                <div>
               <div><textarea value = {props.text} onChange={()=>{
                 props.addMessageActionCreator(m.current?.value)
               }} ref = {m} ></textarea></div>
            <button onClick={()=>{
               props.addMessagesActionCreator();
            }}>Клик</button>
            </div>
            </div>
            <div className={obj.messages}>
              {props.messages.map((item: any)=>{
                return <Message key = {item.id} text={item.text} id = {item.id}/>
              })}
              
            </div>
          
       
        </div>
    )
}


export default Dialogs;