<template>
  <div class="namepage">
  <h1>{{name}}</h1>
  </div>
</template>

<script>
// import Vue from 'vue';

export default{
  name: 'myName',
  props: {
    name: String
  }
}
</script>
<style>
.namepage{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
