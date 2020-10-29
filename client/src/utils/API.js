import axios from 'axios';

export default {
    postEntry: (token, data) => {
        return axios.post(`/api/newentry/${token}`, data)
    }
}