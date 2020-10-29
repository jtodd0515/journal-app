import axios from 'axios';

export default {
    postEntry: (token, data) => {
        console.log(token)
        console.log(data)
        return axios.post(`/api/newentry/${token}`, data)
    }
}