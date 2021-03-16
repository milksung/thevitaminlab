<template>
  <div>
    <h4>Posts page</h4>
    <div class="container">
      <h5 v-for="post in posts" :key="post.id">{{ post.p_name }}</h5>
    </div>
  </div>
</template>

<script>
import axios from "@nuxtjs/axios";
export default {
  data() {
    return {
      posts: [],
    };
  },

  async asyncData({ $axios }) {
    let { data } = await $axios.get("http://localhost:1337/products");
    return { posts: data };
  },
  head: {
    title: "รายการโพสต์",
  },
};
</script>