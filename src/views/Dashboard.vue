<template>
    <div class="row mt-5">
        <div class="col-12">
            <button class="btn-add rounded-circle btn-secondary" @click="addApp">+</button>
        </div>
        <ListApps></ListApps>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import ListApps from "@/components/Dashboard/ListApps.vue"; // @ is an alias to /src

@Component({
    components: {
        ListApps,
    },
})
export default class Dashboard extends Vue {
    addApp(){
        console.log("add");
    }
}
</script>
<style lang="scss" scoped>
.btn-add{
    font-size: 32px;
    border: none;
    width: 50px;
}
</style>