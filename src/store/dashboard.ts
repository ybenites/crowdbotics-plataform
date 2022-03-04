import App from "@/models/App";
import { DashboardService } from "@/services";

const dashboardService = new DashboardService();

export const Dashboard = {
    namespaced: true,
    state: {
        apps: []
    },
    actions: {
        async retrieveApps({ commit }: any){            
            const responseApps= await dashboardService.getApplications();

            if (responseApps.isSuccess) {
                commit("addApps", responseApps.data);
            }
        },
        async deleteApp({ commit }: any, appId: number){
            const responseDeleteApp = await dashboardService.deleteApplication(appId);
            if(responseDeleteApp.isSuccess) {
                commit("deleteApp", appId);
            }
        }
    },
    mutations: {
        deleteApp(state: { apps: App[]}, id: number) {
            state.apps = state.apps.filter(d => d.id != id);
        },
        addApps(state: { apps: App[]}, apps: App[]){
            state.apps = apps;
        }
    },
    getters: {
        getAllApps(state: { apps: App[] }) {
            return state.apps;
        }
    }
}