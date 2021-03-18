<template>
  <section class="news-2-area news-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-sm">
              <div class="news-item mt-30">
                <div class="news-thumb">
                  <img src="assets/images/news-1.jpg" alt="news" />
                </div>
                <div class="news-content">
                  <ul>
                    <li><i class="fa fa-user-o"></i> by admin</li>
                    <li><i class="fa fa-comments-o"></i> 2 comments</li>
                  </ul>
                  <h3 class="title">
                    Why your business absolutely needs <br />
                    a virtual office
                  </h3>
                  <nuxt-link to="/single-news"
                    ><i class="flaticon-right-arrow"></i
                  ></nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="news-item mt-30">
                <div class="news-thumb">
                  <img src="assets/images/news-1.jpg" alt="news" />
                </div>
                <div class="news-content">
                  <ul>
                    <li><i class="fa fa-user-o"></i> by admin</li>
                    <li><i class="fa fa-comments-o"></i> 2 comments</li>
                  </ul>
                  <h3 class="title">
                    Why your business absolutely needs <br />
                    a virtual office
                  </h3>
                  <nuxt-link to="/single-news"
                    ><i class="flaticon-right-arrow"></i
                  ></nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="sidebar">
            <div class="sidebar__single sidebar__search">
              <form action="#" class="sidebar__search-form">
                <input type="text" name="search" placeholder="Search here..." />
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
            <!-- /.sidebar__single -->
            <div class="sidebar__single sidebar__category">
              <h3 class="sidebar__title">Categories</h3>
              <!-- /.sidebar__title -->
              <ul class="sidebar__category-list">
                <li class="sidebar__category-list-item">
                  <a href="#">Business <i class="fa fa-angle-right"></i></a>
                </li>
                <li class="sidebar__category-list-item">
                  <a href="#">Coworking <i class="fa fa-angle-right"></i></a>
                </li>
                <li class="sidebar__category-list-item">
                  <a href="#">Freelancers <i class="fa fa-angle-right"></i></a>
                </li>
                <li class="sidebar__category-list-item">
                  <a href="#"
                    >Creative people <i class="fa fa-angle-right"></i
                  ></a>
                </li>
                <li class="sidebar__category-list-item">
                  <a href="#">Technology <i class="fa fa-angle-right"></i></a>
                </li>
                <li class="sidebar__category-list-item">
                  <a href="#">Startups <i class="fa fa-angle-right"></i></a>
                </li>
              </ul>
              <!-- /.sidebar__category-list -->
            </div>
            <!-- /.sidebar__single -->
            <div class="sidebar__single sidebar__post">
              <h3 class="sidebar__title">Recent Posts</h3>
              <!-- /.sidebar__title -->
              <div class="sidebar__post-wrap">
                <div class="sidebar__post__single">
                  <div class="sidebar__post-image">
                    <div class="inner-block">
                      <img
                        src="/assets/images/post-1.png"
                        alt="Awesome Image"
                      />
                    </div>
                    <!-- /.inner-block -->
                  </div>
                  <!-- /.sidebar__post-image -->
                  <div class="sidebar__post-content">
                    <h4 class="sidebar__post-title">
                      <nuxt-link to="/single-post"
                        >Why your business absolutely needs a virtual
                        office</nuxt-link
                      >
                    </h4>
                    <!-- /.sidebar__post-title -->
                  </div>
                  <!-- /.sidebar__post-content -->
                </div>
                <!-- /.sidebar__post__single -->
                <div class="sidebar__post__single">
                  <div class="sidebar__post-image">
                    <div class="inner-block">
                      <img
                        src="/assets/images/post-2.png"
                        alt="Awesome Image"
                      />
                    </div>
                    <!-- /.inner-block -->
                  </div>
                  <!-- /.sidebar__post-image -->
                  <div class="sidebar__post-content">
                    <h4 class="sidebar__post-title">
                      <nuxt-link to="/single-post"
                        >Why your business absolutely needs a virtual
                        office</nuxt-link
                      >
                    </h4>
                    <!-- /.sidebar__post-title -->
                  </div>
                  <!-- /.sidebar__post-content -->
                </div>
                <!-- /.sidebar__post__single -->
                <div class="sidebar__post__single item">
                  <div class="sidebar__post-image">
                    <div class="inner-block">
                      <img
                        src="/assets/images/post-3.png"
                        alt="Awesome Image"
                      />
                    </div>
                    <!-- /.inner-block -->
                  </div>
                  <!-- /.sidebar__post-image -->
                  <div class="sidebar__post-content">
                    <h4 class="sidebar__post-title">
                      <nuxt-link to="/single-post"
                        >Why your business absolutely needs a virtual
                        office</nuxt-link
                      >
                    </h4>
                    <!-- /.sidebar__post-title -->
                  </div>
                  <!-- /.sidebar__post-content -->
                </div>
                <!-- /.sidebar__post__single -->
              </div>
              <!-- /.sidebar__post-wrap -->
            </div>
            <!-- /.sidebar__single -->
            <div class="sidebar__single sidebar__tags">
              <h3 class="sidebar__title">Tags</h3>
              <!-- /.sidebar__title -->
              <ul class="sidebar__tags-list">
                <li class="sidebar__tags-list-item">
                  <a href="#">Coworking,</a>
                </li>
                <li class="sidebar__tags-list-item">
                  <a href="#">Business,</a>
                </li>
                <li class="sidebar__tags-list-item">
                  <a href="#">Virtual office</a>
                </li>
                <li class="sidebar__tags-list-item">
                  <a href="#">Privateoffice,</a>
                </li>
                <li class="sidebar__tags-list-item">
                  <a href="#">Cabin,</a>
                </li>
                <li class="sidebar__tags-list-item">
                  <a href="#">Creatives,</a>
                </li>
                <li class="sidebar__tags-list-item">
                  <a href="#">Officesuites,</a>
                </li>
              </ul>
              <!-- /.sidebar__category-list -->
            </div>
            <!-- /.sidebar__single -->
          </div>
          <!-- /.sidebar -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogPage",
};
</script>

<style scoped>
</style>
