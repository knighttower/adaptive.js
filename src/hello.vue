<template>
  <div class="sample">
    <p class="greeting">{{ greeting }}</p>
    <button @click="clickFunction">change word</button>  
  </div>
</template>
<script>
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  },
  methods:{
    clickFunction() {
      this.greeting = Math.floor(Math.random() * 10) ;
    }
  }
}
</script>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>