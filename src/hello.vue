<template>
  <div class="sample">
    <div v-if="show" class="lazy">lazy load</div>
    <p class="greeting">{{ greeting }}</p>
    <button @click="clickFunction">change word</button>  
  </div>
</template>
<script>
export default {
  data() {
    return {
      greeting: 'Hello World!',
      show: false
    }
  },
  methods:{
    clickFunction() {
      this.show = true;
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