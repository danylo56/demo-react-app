import * as axios from 'axios';
import { follow } from '../redux/users_reducer';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7b3ec447-2ca6-45ba-b767-4632f788c8d6",
    }
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    follow (userId){
        return instance.post(`follow/${userId}`).then(response => response.data);
    },
    unfollow (userId){
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
    getUser(userId){
        console.warn("You're using old version. Please use profileApi Object");
        return profileApi.getProfile(userId);
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get('profile/' + userId).then(response => response.data);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status){
        return instance.put("profile/status", {status: status});
    }
}

export const authApi = {
    authMe(){
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe=false){
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout(){
        return instance.delete('auth/login');
    }
}