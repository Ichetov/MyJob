import { NavLink } from 'react-router-dom';
import clases from './Nav.module.css'
import { strict } from 'assert';


function Nav(){
    return (
        <nav className={clases.nav}>
        <div className={clases.item}>
         <NavLink className={({ isActive, isPending }) =>
          isActive ? clases.isActive : ""
         } to ='/profile'>Profile</NavLink> 
        </div>
        <div className={clases.item}>
         <NavLink className={({ isActive, isPending }) =>
          isActive ? clases.isActive : ""
         } to = '/dialogs'>Messages</NavLink> 
        </div>
        <div className={clases.item}> 
         <a>News</a> 
        </div>
        <div className={clases.item}>
         <a>Musik</a> 
        </div>
        <div className={clases.item}>
         <a>Settings</a> 
        </div>
        <NavLink className={({ isActive, isPending }) =>
          isActive ? clases.isActive : ""
         } to ='/users'>Users</NavLink>
      </nav>
    )
   }
   
   export default Nav;