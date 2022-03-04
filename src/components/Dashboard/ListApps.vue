<template>
    <div class="col-12 mt-4">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="(app, index) in arrayApps" :key="`app-${index}`">
                <CardApp :app="app" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import CardApp from './CardApp.vue';
import App from "@/models/App";

@Component({
    components:{
        CardApp
    }
})
export default class ListApps extends Vue {
    @Action("Dashboard/retrieveApps") actionRetrieveApps!: any;
    @Getter("Dashboard/getAllApps") arrayApps!: App[];

    async created(){
        await this.actionRetrieveApps();
    }
}
</script>