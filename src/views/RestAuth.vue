<template>
  <div class="min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container">
        <Login />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Login from "@/components/Auth/Login.vue"; // @ is an alias to /src

@Component({
  components: {
    Login,
  },
})
export default class RestAuth extends Vue {}
</script>