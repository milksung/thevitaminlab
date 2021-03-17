<template>
  <div>
    <Nav />
    <PageHeader title="PRODUCT" />
    <!-- <section class="explore-codesk-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="explore-codesk-title text-center">
              <h3 class="title">สินค้า</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6" v-for="post in posts" :key="post.id">
            <div class="explore-codesk-item mt-50">
              <img src="/assets/images/product/prodoct1.jpg" alt="explore" />
              <h3 class="title">{{ post.p_name }}</h3>
              <p>{{ post.p_detail_1 }}</p>
              <div
                class="item d-flex justify-content-between align-items-center"
              >
                <span>30 เม็ด</span>
                <p>990 บาท</p>
              </div>
              <nuxt-link class="main-btn main-btn-2" to="/single-event"
                >More <i class="flaticon-right-arrow"></i
              ></nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="explore-codesk-shape">
        <img src="/assets/images/testimonial-pattern.png" alt="" />
      </div>
    </section> -->
    <BlogPage />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BlogPage from "../components/BlogPage";
import SubArea from "../components/SubArea";
export default {
  components: {
    BlogPage,
    Footer,
    PageHeader,
    Nav,
    SubArea,
  },
  head() {
    return {
      title: "THEVITAMINLAB | PRODUCT",
    };
  },
  // data() {
  //   return {
  //     posts: [],
  //   };
  // },

  // async asyncData({ $axios }) {
  //   let { data } = await $axios.get("http://localhost:1337/products");
  //   return { posts: data };
  // },
  // head: {
  //   title: "thevitaminlab",
  // },
};
</script>
