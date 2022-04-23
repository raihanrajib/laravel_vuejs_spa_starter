<template>
    <div class="p-4 text-cyan-700 font-bold">
        <h3>Dashboard page</h3>
        {{  }}
    </div>
</template>

<script>

    export default {
        data:function() {
            return {
                showSidebar: false, //starts off invisible
            }
   
        },
        methods: {
            toggleSidebar(){
                this.showSidebar = !this.showSidebar
            },

        },
        computed:{
            isLoggedIN(){
                return this.$store.getters.getAuthenticated;
            }
        }

    }
</script>

<style>

</style>