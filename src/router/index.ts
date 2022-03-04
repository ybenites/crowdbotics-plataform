import { Vue } from "vue-property-decorator";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

import store from "@/store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/rest-auth",
    name: "RestAuth",
    component: () =>
      import(/* webpackChunkName: "rest-auth" */ "../views/RestAuth.vue"),
  },
  {
    path: "",
    component: () => import(/* webpackChunkName: "dashboard" */ "../layouts/dashboard.vue"),
    children:[
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import(/* webpackChunkName: "component-dashboard" */ "../views/Dashboard.vue"),  
        meta: {
          requiresAuth: true 
        }
      }      
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to: any, from: any, next: any) => {
//   if (to.meta.requiresAuth) {    
//     if(store.getters['Auth/isLoggedIn']) {
//       next();
//       return;
//     }
//     next('/rest-auth');
//   } else {
//     next();
//   }
// });

export default router;
