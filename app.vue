<script setup>
import { ref, onMounted } from "vue";

const bgImage = ref("");

onMounted(() => {
  const cacheKeyPrefix = "bgImageCache_"; // 图片缓存键前缀
  const randomId = Math.floor(Math.random() * 603) + 1; // 生成 1-603 之间的随机数
  const imageUrl = `https://static.shittim.art/images/acg_imageset/${randomId}.webp`;
  const cacheKey = cacheKeyPrefix + randomId; // 本地存储 key

  // **1. 立即使用 URL，保证快速展示**
  bgImage.value = imageUrl;

  // **2. 后台异步缓存**
  setTimeout(async () => {
    const cachedImage = localStorage.getItem(cacheKey);
    if (!cachedImage) {
      try {
        const response = await fetch(imageUrl, { cache: "force-cache" });
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        localStorage.setItem(cacheKey, objectURL); // 缓存图片
      } catch (error) {
        console.error("图片加载失败", error);
      }
    }
  }, 0); // 让 `fetch` 在后台执行，不影响页面渲染
});
</script>

<template>
  <div class="page-container" :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="header">
      <img src="https://static.shittim.art/images/nav-page/zzsz-badge.webp" alt="图标" height="64">
      郑州市第四高级中学英才2班导航站
    </h1>
    <div class="container">
      <NuxtRouteAnnouncer/>
      <NuxtPage/>
    </div>
    <footer>
      Copyright © {{ new Date().getFullYear() }} 郑州市第四高级中学英才2班 |
      <nuxt-link to="/preview">测试页面</nuxt-link>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: no-repeat center center fixed;
  background-size: cover;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  color: #333;
  transition: background-image 0.3s ease-in-out;
}

.header {
  margin: 20px 0;
  font-size: 28px;
  color: #444;
  text-align: center;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 16px;
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
  gap: 20px;
  flex-wrap: wrap;
  overflow-y: auto;
}

footer {
  margin: 20px 0;
  font-size: 14px;
  color: #666;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 16px;
  user-select: none;
}
footer a{
  text-decoration: none;
  color: #444;
}
</style>
