<script setup lang="ts">
  const idGet=useRoute()
  //console.log(idGet.params.name);
  const name=ref(idGet.params.name);
</script>

<template>
  <div>
    <h1>{{name}}'s detail</h1>
  </div>

</template>

<style scoped>

</style>