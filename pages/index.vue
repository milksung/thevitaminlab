<template>
  <div>
    <Nav />
    <Slider />
    <SubArea />
    <SpaceToMake />
    <!-- <ExploreCodesk /> -->
    <section class="explore-codesk-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="explore-codesk-title text-center">
              <h3 class="title">สินค้าแนะนำ</h3>
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
    </section>

    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import SpaceToMake from "../components/SpaceToMake";
import SubArea from "../components/SubArea";
import ExploreCodesk from "../components/ExploreCodesk";

export default {
  components: {
    Footer,
    Slider,
    Nav,
    SpaceToMake,
    SubArea,
    ExploreCodesk,
  },
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
    title: "thevitaminlab",
  },
};
</script>
