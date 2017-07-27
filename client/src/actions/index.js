import axios from 'axios';

export const FETCH_USERS = "FETCH_USERS";

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:8090/api' : '/api';

export const fetchUser = () =>  {

    const url = `${ROOT_URL}/users`;
    const request = axios.get(url);

    return {
        type: FETCH_USERS,
        payload: request
    };
};





