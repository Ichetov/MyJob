import { NavLink } from 'react-router-dom';
import s from './Users.module.css';


const UsersPres = (props) => {

    let z = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= z; i++) {
        if (pages.length === 40) break;
        pages.push(i)
    }

    return (
        <div>
            <h1>Users</h1>

            <UsersSearchForm />
            {pages.map(i => {
                return <span key={i} onClick={() => props.openPage(i)} className={props.currentPage === i ? s.mix : ''}>{i}</span>
            })}
            {props.users.map((i) => {
                return <div key={i.id}>
                    <div className="div">
                        <NavLink to={`/profile/${i.id}`}>
                            <img width='60px' src={i.photos.small ?? 'https://cs13.pikabu.ru/avatars/2813/x2813294-2116974249.png'} alt="" />
                        </NavLink>
                        <div>{i.name}</div>
                        {i.followed ? <div><button disabled={props.isFetch.includes(i.id)}
                            onClick={() => {
                                props.DelUnfollow(i.id)

                            }
                            }>Unfollow</button>
                        </div> :

                            <div>
                                <button disabled={props.isFetch.includes(i.id)} onClick={() => {
                                    props.setFollow(i.id)
                                }

                                }>Follow</button></div>}

                    </div>
                    <div className="div">
                        {i.status}
                    </div>
                </div>
            })}

        </div>
    )


}


const UsersSearchForm = () => {
    return (
      <></>
    )
}


export default UsersPres;