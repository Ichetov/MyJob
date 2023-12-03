import { NavLink, Navigate } from 'react-router-dom';
import obj from  './Header.module.css';

function Header({login, isFetchin, OutLoginRed}: any){
 return (
    <header className={obj.header}>
      <div style = {{float: 'right'}}>
        {isFetchin ? <div><button onClick={OutLoginRed}>Out</button><span>{login}</span></div> : <NavLink to = {'/login'}>Login</NavLink>}
      </div>
    <img src="https://avatars.mds.yandex.net/i?id=0332da7d595c3811e5d12bd7f054e9f9_sr-5222395-images-thumbs&n=13" alt="" />    
    <div>
      
    </div>
  </header>
 )
}

export default Header;