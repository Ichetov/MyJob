import { compose } from "redux";
import { addMessageActionCreator, addMessagesActionCreator } from "../../Redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import { withAuthRedirect } from "../hoc/authRedirect";
import Dialogs from "./Dialogs";

import { connect } from "react-redux/es/exports";
import { getMessage } from "../../Redux/user-selector";

// const ContainerDialogs = () => {

//     return (
//         <StoreContext.Consumer>{
//                 (store => {
//                     let state = store.getState().messagesPage;
//                     let dispatch = store.dispatch.bind(store);

//                     function addMessages() {
//                         dispatch(addMessagesActionCreator())
//                     }

//                     function addText(text) {
//                         dispatch(addMessageActionCreator(text))
//                     }

//                     return <Dialogs addMessages={addMessages} addText={addText} state={state} />
//                 })
//             }


//         </StoreContext.Consumer>
//     )
// }


   function DialogsComponent(Component: any){
    return function c(props: any){
        return <Component {...props}/>
    }
    
   }
        
  

const myStateToProps = (state: any) => {
    return {
        messages: getMessage(state),
        text: state.messagesPage.text,
        dialogs: state.messagesPage.dialogs,
    }
}






export default compose(
    connect(myStateToProps, {addMessagesActionCreator, addMessageActionCreator}),
    withAuthRedirect,
    DialogsComponent
)(Dialogs)