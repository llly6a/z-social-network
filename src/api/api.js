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
    }
}
