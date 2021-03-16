<template>
  <section
    class="codesk-changing-area bg_cover"
    style="background-image: url(/assets/images/about/background_about.jpg)"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="codesk-changing-text">
            <h3 class="title">THEVITAMINLAB</h3>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="codesk-changing-play text-left text-lg-right">
            <a
              class="main-btn video-popup videoBox"
              href="https://www.youtube.com/watch?v=c4GxnW-ABOM"
              ><i class="fa fa-play"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ChangingArea",
  mounted() {
    new GLightbox({
      selector: ".videoBox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });
  },
};
</script>

<style scoped>
</style>
