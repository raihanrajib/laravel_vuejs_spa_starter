<template>
    <div>
        <h3>This default layout</h3>
        <router-view></router-view>
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
                console.log(response.data);
            });
        }
    }

    }
</script>

<style>

</style>