<template>
  <div>
    <header class="header-area">
      <div class="header-top-area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="header-top">
                <ul>
                  <li>
                    <a href="mailto:info@thevitaminlab.com"
                      ><i class="flaticon-message"></i>
                      info@thevitaminlab.com</a
                    >
                  </li>
                  <li>
                    <a href="tel:66 85 5522367"
                      ><i class="flaticon-phone-call"></i> +66 85 5522367</a
                    >
                  </li>
                  <li>
                    <a href="https://g.page/thevitaminlab?share" target="_blank"
                      ><i class="flaticon-placeholder"></i> 555/39 โครงการฟิฟธ์
                      อเวนิว มีโชค อำเภอสันทราย เชียงใหม่ 50210</a
                    >
                  </li>
                </ul>
                <div class="dropdown d-none d-md-block">
                  <img src="/assets/images/map.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="`main-header ${sticky ? 'sticky' : ''}`">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="main-header-item d-flex justify-content-between align-items-center"
              >
                <div class="main-header-menus d-flex">
                  <div class="header-logo">
                    <a href="/"
                      ><img src="/assets/images/logo.png" alt="logo"
                    /></a>
                  </div>
                  <div class="header-menu d-none d-lg-block">
                    <ul>
                      <li>
                        <nuxt-link to="/">หน้าแรก</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/about">เกี่ยวกับ</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/product">ผลิตภัณฑ์</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/register">สมัครสมาชิก</nuxt-link>
                      </li>
                      <li><nuxt-link to="/contact">ติดต่อเรา</nuxt-link></li>
                    </ul>
                  </div>
                </div>
                <div class="header-social d-flex align-items-center">
                  <ul class="d-none d-lg-block">
                    <li>
                      <a href="/Profile"
                        ><i class="fa fa-user" aria-hidden="true"></i
                      ></a>
                    </li>

                    <li>
                      <a href="/add-to-cart"
                        ><i class="fa fa-shopping-bag" aria-hidden="true"></i
                      ></a>
                    </li>
                  </ul>
                  <div
                    @click="mobileToggle = !mobileToggle"
                    class="toggle-btn ml-30 canvas_open d-lg-none d-block"
                  >
                    <i class="fa fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div :class="`off_canvars_overlay ${mobileToggle ? 'active' : ''}`"></div>
    <div class="offcanvas_menu">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div
              :class="`offcanvas_menu_wrapper ${mobileToggle ? 'active' : ''}`"
            >
              <div class="canvas_close">
                <a
                  @click="mobileToggle = !mobileToggle"
                  href="javascript:void(0)"
                  ><i class="fa fa-times"></i
                ></a>
              </div>
              <div class="offcanvas-social">
                <ul class="text-center">
                  <li>
                    <a href="/Profile"
                      ><i class="fa fa-user" aria-hidden="true"></i
                    ></a>
                  </li>

                  <li>
                    <a href="/add-to-cart"
                      ><i class="fa fa-shopping-bag" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div id="menu" class="text-left">
                <ul class="offcanvas_main_menu">
                  <li>
                    <nuxt-link to="/">หน้าแรก</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/about">เกี่ยวกับ</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/product">ผลิตภัณฑ์</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/register">สมัครสมาชิก</nuxt-link>
                  </li>
                  <li><nuxt-link to="/contact">ติดต่อเรา</nuxt-link></li>
                </ul>
              </div>

              <div class="offcanvas_footer">
                <span>
                  <a href="mailto:info@thevitaminlab.com"
                    ><i class="flaticon-message"></i> info@thevitaminlab.com</a
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      sticky: false,
      mobileToggle: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    },
  },
};
</script>

<style scoped>
</style>
