import $api from '../http/index';
import {AxiosResponse} from 'axios';

export default class UserService {
    static createEvent() {
        return $api.post('/create')
    }

    static getEvents() {
        return $api.get('/events')
    }

    static delete() {
        return $api.get('/:id')
    }
}