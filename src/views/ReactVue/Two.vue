
<template>
  <div>
    <three>{{count}}</three>
    <button @click="handleClick">+1s</button>
    <div>{{count}}</div>
  </div>
</template>

<script>
  import Three from './Three'
  export default {
    name: "Two",
    components: { 
      'three': Three 
    },
    data () {
      return {
        count: 0
      }
    },
    methods: {
      handleClick() {
        this.count++
      }
    }
  }
</script>