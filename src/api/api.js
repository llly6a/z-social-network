import axios from 'axios';

const ax = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2ebb17e1-06cc-404e-9920-eb697655edc9"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 4) {
        return ax.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return ax.delete(`follow/${userId}`)
    },
    follow(userId) {
        return ax.post(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('this method is obsolete, please use ProfileAPI');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return ax.get(`profile/` + userId);
    },
    getStatus(userId) {
       return ax.get(`profile/status/` + userId);       
    },
    updateStatus(status) {
        return ax.put(`profile/status/`, {status: status});       
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append("image", file);

        return ax.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);       
    }
}

export const authAPI = {
    authMe() {
        return ax.get(`auth/me`)
    },
    login(email,password,rememberMe=false){
        return ax.post('auth/login/', {email,
            password,
            rememberMe});
    },
    logout(){
        return ax.delete('auth/login/');
    }
}