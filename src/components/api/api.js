import axios from "axios"




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    'API-KEY': '05bd0580-6d2d-479d-a3ef-df61693ba8a2'
})

export let getUsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(data=> data.data)
    },
    follow(id){
       return instance.post(`/follow/${id}`)
       .then(val => {
       return val.data
       })
    },

    unfollow(id){
        return instance.delete(`/follow/${id}`)
        .then(val => {
        return val.data
        })
    }
}


export let headerAuth = {
    auth() {
        return instance.get(`auth/me`)
        .then(data=> data.data)
    },
    login(email, password,remember){
        return instance.post('/auth/login', {
            email: email,
            password:password,
            rememberMe: remember
        })
        .then(val=>{
            return val.data.resultCode
        })
    },
    outLogin(){
        return instance.delete('/auth/login')
        .then(val=>  val.data.resultCode)
    }
}


export const profileAPI = {
    addProfile(id){
        return instance.get(`profile/${id}`)
        .then(val=>{
            return val.data
        })
    }
}


export const statusAPI = {
  addStatus(userId){
   return instance.get(`/profile/status/${userId}`)
   .then(data=>{
    return data.data
   })
  },
  updateStatus(status){
    return instance.put(`/profile/status`, {
       status
    })
    
  }
}
