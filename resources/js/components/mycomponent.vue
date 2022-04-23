<template>
  <div>
        <button @click="setLayout('dashboard')">Simple Layout</button>
        <button @click="setLayout('default')">App Layout</button>
  </div>

</template>

<script>
export default {
  methods: {
    setLayout (layout) {
      this.$store.commit('SET_LAYOUT', layout)
    }
  }
}
</script>
