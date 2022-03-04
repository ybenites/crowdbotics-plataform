<template>
  <div class="row" >
    <div class="col-md-12">
      <div class="card box-content">
        <img alt="Vue logo" class="img-fluid mx-auto" src="@/assets/logo.png" />
        <form name="form" @submit.prevent="handleLogin" :class="errors.items.length>0?'was-validated':''">
          <div class="mb-3">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              v-model="user.email"
              v-validate="'required'"
              type="email"
              class="form-control"
              name="email"
              required
            />
            <div
              v-if="errors.has('email')"
              class="invalid-feedback"
              role="alert"
            >
              Email is required!
            </div>
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">Password</label>
            <input
              v-model="user.password"
              v-validate="'required'"
              type="password"
              class="form-control"
              name="password"
              required
            />
            <div
              v-if="errors.has('password')"
              class="invalid-feedback"
              role="alert"
            >
              Password is required!
            </div>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary d-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import User from "@/models/User";

@Component
export default class Login extends Vue {  
  @Action("Auth/login") actionLogin!: any;

  user: User = new User("", "");
  message ?= "";
  loading = false;

  async handleLogin() {
    this.loading = true;
    let isValid = await this.$validator.validateAll();
    if (!isValid) {
      this.loading = false;
      return;
    }
    
    // use the service and save it in the store
    let responseLogin = await this.actionLogin(this.user);
    if(responseLogin.isSuccess){      
      this.$router.push('/dashboard');
    } else {
      this.message = responseLogin.error;
      this.loading = false;
    }
  }
}
</script>
<style lang="scss" scoped>
.box-content {
  border-radius: 8px;
  padding: 78px 59px 80px;
  border: 1px solid #8e8e8e;
  max-width: 562px;
  margin: 0 auto;

  .btn {
    padding: 10px 14px;
    min-width: 80px;
    white-space: normal;
    font-size: 18px;
    box-shadow: none;
    width: 100%;
    background-color: #00825e;
    border-color: #00825e;
    &:hover {
      background-color: #007857;
      border-color: #00825e;
    }
  }
}
</style>