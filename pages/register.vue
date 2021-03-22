<template>
  <div>
    <Nav />
    <PageHeader title="Register" />

    <Register />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Register from "../components/Register";
export default {
  components: {
    Footer,
    PageHeader,
    Nav,
    Register,
  },
  head() {
    return {
      title: "THEVITAMINLAB | Register",
    };
  },
};
</script>
