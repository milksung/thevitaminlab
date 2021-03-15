<template>
  <section class="best-creative-area" v-observe-visibility="onVisibilityChange">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="best-creative-bg">
            <div class="row">
              <div class="col-lg-12">
                <div class="best-creative-content">
                  <h3 class="title">THE VITAMINLAB</h3>
                  <p>
                    THE VITAMIN LAB คือ “Modern Lifestyle Supplement Brand”
                    ที่ก่อตั้งขึ้นโดยทีมแพทย์ผู้เชี่ยวชาญด้านการแพทย์ชะลอวัย
                    (Anti-aging)
                    ซึ่งมีประสบการณ์ในการพัฒนาโปรแกรมโภชนเภสัชเฉพาะบุคคล
                    (Personalized Nutraceutical) มากว่า 10 ปี และยังร่วมค้นคว้า
                    พัฒนาผลิตภัณฑ์กับแล็บ R&D ชั้นนำทั้งในและต่างประเทศ
                    ทำให้ได้ผลิตภัณฑ์เสริมอาหารที่มีคุณภาพสูง ปลอดภัย
                    เป็นที่ยอมรับ และถูกนำไปใช้จริงในคลินิกชั้นนำ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import countTo from "vue-count-to";
import { ObserveVisibility } from "vue-observe-visibility";
export default {
  name: "BestCreative",
  components: { countTo },
  directives: {
    ObserveVisibility,
  },
  data() {
    return {
      startCounter: false,
    };
  },
  methods: {
    onVisibilityChange(isVisible) {
      if (isVisible) {
        this.startCounter = true;
      }
    },
  },
};
</script>

<style scoped>
</style>
