<template>
  <div>
    <Nav />
    <PageHeader title="product Single" />
    <BlogDetails />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BlogDetails from "../components/BlogDetails";
export default {
  components: {
    BlogDetails,
    Footer,
    PageHeader,
    Nav,
  },
  head() {
    return {
      title: "THEVITAMINLAB | 3C COMPLEX",
    };
  },
};
</script>
