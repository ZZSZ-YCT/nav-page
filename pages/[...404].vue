<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
function Back() {
  router.back()
}
</script>
<template>
  <div class="error-page">
    <h1>404 Not Found</h1>

    <v-btn class="ma-2" color="orange-darken-2" @click="Back">
      <v-icon icon="mdi-arrow-left" start></v-icon>
      GoBack
    </v-btn>
  </div>
</template>

<style scoped>

.error-page {
  display: flex;
  flex-direction: column; /* 让内容垂直排列 */
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px; /* 控制标题和按钮的间距 */
}


</style>
