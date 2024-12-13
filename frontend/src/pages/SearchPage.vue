<script setup>
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
</script>

<template>
  <div>
    <h2 class="title">搜索結果：植物</h2>
    <PostList>
      <PostItem v-for="n in 10" :key="n" />
    </PostList>
  </div>
</template>

<style>
.title {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 44px;
}
</style>
