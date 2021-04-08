import axios from 'axios'

let instance = axios.create({
  withCredentials:true, 
  baseURL:'https://social-network.samuraijs.com/api/1.0/',
  //headers:{"API-KEY":""}
})

const getUsers = (currentPage, pageSize)=>{
  return instance.get(`users?page= ${currentPage} &count= ${pageSize}`)
}

export const getUserStatus = (userId)=>{
  return instance.get(`profile/status/${userId}`)
}

export const putUserStatus = (status)=>{
  return instance.put(`profile/status`, {status:status})
}

export const apiUsers = {
  getAuth(){
    return instance.get('auth/me')
  },

  login(email, password, rememberMe){
    
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout(){
    return instance.delete('auth/login')
  }
}
 
export default getUsers
