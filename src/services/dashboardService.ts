import { BaseService } from "./baseService";
import axios, { AxiosError } from 'axios';

// const API_URL = 'https://hiring-example-25770.botics.co/api/v1/';
const API_URL = 'http://localhost/proxy-crowdbotics-api/api/v1/';

export class DashboardService extends BaseService {
    constructor(){
        super();
    }

    async deleteApplication(id: number){
        try {
            const response = await axios.delete(`${API_URL}apps/${id}/`, {
                withCredentials: true
            });
            console.log(response);
            return {
                data: response.data,
                isSuccess: true
            };
        } catch (ex) {
            return {
                isSuccess: false,
                error: (ex as AxiosError).response?.data.detail
            }
        }
    }

    async getApplications(){
        try {
            const response = await axios.get(`${API_URL}apps/`, {
                withCredentials: true
            });

            return {
                data: response.data,
                isSuccess: true
            };
        } catch (ex) {
            return {
                isSuccess: false,
                error: (ex as AxiosError).response?.data.detail
            }
        }
    }
}