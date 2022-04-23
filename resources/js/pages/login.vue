<template>
  <div class="flex items-center h-screen w-full">
      <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span class="block w-full text-xl uppercase font-bold mb-4">Login</span>

          <form class="mb-4" @keydown="form.onKeydown($event)" @submit.prevent="login()">
              <div class="mb-4 md:w-full">
                  <label for="email" class="block text-xs mb-1">Username or Email</label>
                  <input class="w-full border rounded p-2 outline-none focus:shadow-outline" v-model="form.email"
                      type="email" name="email" placeholder="Username">
                  <div role="alert" class="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                      v-if="form.errors.has('email')" v-html="form.errors.get('email')" />
              </div>

              <div class="mb-6 md:w-full">
                  <label for="password" class="block text-xs mb-1">Password</label>
                  <input class="w-full border rounded p-2 outline-none focus:shadow-outline" v-model="form.password"
                      type="password" name="password" placeholder="Password">
                  <div class="alert bg-yellow-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center w-full alert-dismissible fade show"
                      role="alert" v-if="form.errors.has('password')" v-html="form.errors.get('password')" />
              </div>
              <button
                  class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
                  
          </form>
          <a class="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
      </div>
  </div>
</template>

<script>
import Form from 'vform';
export default {
    data(){
        return {
            form: new Form({
            email: '',
            password: ''
            })
        }
    },
    methods:{
        async login(){
            await axios.get('/sanctum/csrf-cookie')
            await this.form.post('/login')
            await this.getUserData();
            this.$router.push({ name: 'dashboard' });
        },
        async getUserData(){
            await axios.get('/api/user').then(response => {
                let user = response.data;
                this.$store.commit('SET_USER', user);
                this.$store.commit('SET_AUTHENTICATED', true);
                localStorage.setItem("auth", true);
            });
        }
    }

    }
</script>

<style>

</style>