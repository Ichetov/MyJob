import { NavLink } from "react-router-dom"
import obj from './../Dialogs.module.css'


const DialogItem = ({name, id}:any)=>{
    return (
        <div className="">
          
              <div className={obj.dialog + ' ' + obj.active}>
              <img width= '40px' src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkbE7_bm5SoMDN2g_w0KMdn6aKTM5SRkZCeTgDn6uOyic" alt="" />

                <NavLink to = {`/dialogs/${id}`} >
                  {name}
                </NavLink>
                </div>
        </div>
    )
}


export default DialogItem