<template>
  <div>
    <Nav />
    <PageHeader title="Receipt" />
    <Receipt />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Receipt from "../components/receipt";
export default {
  components: {
    Receipt,
    Footer,
    PageHeader,
    Nav,
  },
  head() {
    return {
      title: "THEVITAMINLAB | Receipt",
    };
  },
};
</script>
