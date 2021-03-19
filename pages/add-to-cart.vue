<template>
  <div>
    <Nav />
    <PageHeader title="ADD TO CART" />
    <Cart />

    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Cart from "../components/cart";
export default {
  components: {
    Cart,

    Footer,
    PageHeader,
    Nav,
  },
  head() {
    return {
      title: "THEVITAMINLAB | Cart",
    };
  },
};
</script>
