<template>
  <div>
    <section class="footer-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="footer-about mt-30">
              <div class="logo">
                <a href="#"><img src="/assets/images/logo.png" alt="logo" /></a>
              </div>
              <p>
                THE VITAMIN LAB คือ “Modern Lifestyle Supplement Brand”
                ที่ก่อตั้งขึ้นโดยทีมแพทย์ผู้เชี่ยวชาญด้านการแพทย์ชะลอวัย
                (Anti-aging)
              </p>
              <ul>
                <li>
                  <a href="mailto:info@thevitaminlab.com"
                    >info@thevitaminlab.com</a
                  >
                </li>
                <li><a href="tel:66 85 5522367"> +66 85 5522367</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="footer-list mt-30">
              <h4 class="title">Company</h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Latest events</a></li>
                <li><a href="#">Our services</a></li>
                <li><a href="#">News & articles</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="footer-list pl-35 mt-30">
              <h4 class="title">Explore</h4>
              <ul>
                <li><a href="#">Our history</a></li>
                <li><a href="#">Help & support</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Terms & condition</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-address mt-30">
              <h3 class="title">ที่อยู่</h3>
              <p>
                555/39 โครงการฟิฟธ์ อเวนิว มีโชค อำเภอสันทราย เชียงใหม่ 50210
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15105.270086607543!2d99.0129825!3d18.8285445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa0dfe7a052cd77d8!2zVGhlIFZpdGFtaW4gTGFiIOC4nOC4peC4tOC4leC4oOC4seC4k-C4keC5jOC4reC4suC4q-C4suC4o-C5gOC4quC4o-C4tOC4oeC4peC4lOC4meC5ieC4s-C4q-C4meC4seC4gQ!5e0!3m2!1sth!2sth!4v1615802224602!5m2!1sth!2sth"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>

              <span><i class="fa fa-map-marker"></i> Find us on Map</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="footer-copyright d-block d-md-flex justify-content-between align-items-center"
              >
                <p>© Copyright 2020 by thevitaminlab</p>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/thevitaminlab"
                      target="_blank"
                      ><i class="fa fa-facebook-square"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/thevitaminlab_official/"
                      target="_blank"
                      ><i class="fa fa-instagram"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://shopee.co.th/shop/36061/" target="_blank"
                      ><i class="fa fa-shopping-bag" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-pattern">
        <img src="/assets/images/footer-pattern.png" alt="" />
      </div>
      <div class="footer-logo">
        <img src="/assets/images/footer-logo.png" alt="" />
      </div>
    </section>

    <div class="go-top-area">
      <div class="go-top-wrap">
        <div class="go-top-btn-wrap">
          <div
            @click="scrollTop"
            :class="`go-top go-top-btn ${scrollBtn ? 'active' : ''}`"
          >
            <i class="fa fa-angle-double-up"></i>
            <i class="fa fa-angle-double-up"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      scrollBtn: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.scrollBtn = true;
      } else if (window.scrollY < 70) {
        this.scrollBtn = false;
      }
    },

    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
</style>
