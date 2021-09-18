import {makeAutoObservable} from 'mobx';
import AuthService from '../services/AuthService';
import axios from 'axios';
import {API_URL} from '../http/index';
import UserService from "../services/UserService";

export default class Store {
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    setEvents(events) {
        this.events = events;
    }

    async login(email, password) {
        try {
            console.log("1")
            const response = await AuthService.login(email, password);
            console.log("2")
            console.log(response)
            console.log("3")
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async addEvent(date) {
        try {
            const response = await UserService.create(date);
        } catch (e) {
            console.log(e);
        }
    }

    async getEvents() {
        try {
            const events = await UserService.getEvents();

        } catch (e) {
            console.log(e)
        }


    }

    async deleteEvent(date) {
        try {
            const response = await UserService.delete(date.id);
        } catch (e) {
            console.log(e);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
        } catch (e) {
            console.log(e?.response?.data?.message);

        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}