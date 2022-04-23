<template>
  <div>
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
import Default from './../layouts/default.vue'
import Dashboard from '../layouts/dashboardLayout.vue'
export default {
  computed: {
    auth(){
      return this.$store.getters.getAuthenticated;
    }
  },
  
}
</script>