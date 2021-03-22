<template>
  <div>
    <Nav />
    <PageHeader title="Login" />

    <Login />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Login from "../components/Login";
export default {
  components: {
    Footer,
    PageHeader,
    Nav,
    Login,
  },
  head() {
    return {
      title: "THEVITAMINLAB | Login",
    };
  },
};
</script>
