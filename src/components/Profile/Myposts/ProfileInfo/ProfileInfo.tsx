import Preloader from '../../../common/Preloader/Preloader';
import s from './Profile.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({state, status,updateStatus}: any)=> {

  if(!state.profileData){
    return <Preloader/>
  }
    return (
        <div className="">
   <div>
        <img src="https://i.pinimg.com/originals/bf/fe/e4/bffee478d3c19ab5918ec4456c662f56.jpg" alt="" />
        </div>
      <div className={s.description}>
        <img src={state.profileData.photos.small || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Leopard_in_the_Colchester_Zoo.jpg/300px-Leopard_in_the_Colchester_Zoo.jpg'} alt="" />
         <div>{state.profileData.fullName}</div>
         <div>{state.profileData.contacts.github}</div>
         <ProfileStatus status = {status} updateStatus= {updateStatus}/>
      </div>
     
        </div>
    )
}

export default ProfileInfo;