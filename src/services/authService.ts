import { BaseService } from "./baseService";
import User from "@/models/User";
import axios, { AxiosError } from 'axios';


// const API_URL = 'https://hiring-example-25770.botics.co/rest-auth/';
const API_URL = 'http://localhost/proxy-crowdbotics-api/api/v1/';

export class AuthService extends BaseService {
    constructor(){
        super();
    }

    async Login(user: User)
    {
        try {
            const response = await axios.post(`${API_URL}login/`, {
                email: user.email,
                password: user.password
            }, {withCredentials: true});

            return {
                key: response.data.key,
                isSuccess: true
            };
        } catch (ex) {
            return {
                isSuccess: false,
                error: (ex as AxiosError).response?.data.non_field_errors[0]
            }
        }
    }

    Register()
    {
        console.log('registration');
    }

    Logout()
    {
        console.log('logout');
    }
}