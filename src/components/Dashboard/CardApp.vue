<template>
    <div class="card my-3 p-4">
        <h4 class="text-center">
            {{ app.name }}
        </h4>        
        <h5 class="text-center">
            {{ app.framework }}
        </h5>
        <p class="text-center">
            {{ app.description }}
        </p>
        <div v-if="app.subscription !=null">
            <span class="fw-bold">Price: </span>
        </div>
        <div class="text-center">
            <button type="button" class="btn btn-primary" v-if="app.subscription == null">Subscriptions</button>
            <button type="button" class="btn btn-primary mx-1">Edit</button>
            <button type="button" class="btn btn-danger" @click="deleteApp">Delete</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Action } from "vuex-class";
import App from "@/models/App";

@Component
export default class CardApp extends Vue {
    @Prop() readonly app!: App;
    @Action("Dashboard/deleteApp") actionDeleteApp!: any;

    async deleteApp(){
        if(this.app !== null) {
            await this.actionDeleteApp(this.app.id);
        }        
    }
}
</script>