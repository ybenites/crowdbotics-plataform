import User from "@/models/User";
import { AuthService } from "@/services";

export const Auth = {
    namespaced: true,
    state: {
        loggedIn: false,
        user: null
    },
    actions: {
        async login({ commit }: any, user: User) {
            const authService = new AuthService();
            const responseLogin= await authService.Login(user);
            if(responseLogin.isSuccess){
                commit('loginSuccess', user);
            } else {
                commit('loginFail');
            }

            return responseLogin;
        }
    },
    mutations: {
        loginSuccess(state: {loggedIn: boolean, user: User}, user: User) {
            state.loggedIn = true;
            state.user = user;
        },
        loginFail(state: {loggedIn: boolean, user: User | null }) {
            state.loggedIn = false;
            state.user = null;
        }
    },
    getters: {
        isLoggedIn(state : { loggedIn: boolean}) {
            return state.loggedIn;
        },
        getUser(state: {user: User}) {
            return state.user;
        }
    }
}