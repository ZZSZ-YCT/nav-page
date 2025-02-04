<script setup lang="ts">
const projects=ref([
  {
    id:"index",
    name:"index页面",
    path:"idx",
  }
])
</script>

<template>
  <div class="nav-wrapper">
    <h1>预览页面导航</h1>
    <div class="container">
      <div v-for="obj in projects" :key="obj.id" class="item">
        <nuxt-link :to="obj.path ? '/preview/' + obj.path : '/preview/'">
          {{ obj.name }}
        </nuxt-link>
      </div>
    </div>
    <nuxt-link to="/">首页</nuxt-link>
  </div>

</template>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* 标题和内容之间的间距 */
  width: 100%;
}

h1 {
  margin: 0;
}

.container {
  width: 90%;
  max-width: 1200px;
  max-height: 70vh;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-wrap: wrap; /* 允许内容自动换行 */
  gap: 20px;
  overflow-y: auto;
  justify-content: center;
}
.container a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  background: #f0f0f0;
  border-radius: 8px;
  text-decoration: none;
}

.item a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>
