<template>
  <div>
    <Nav />
    <PageHeader title="Profile" />

    <Profile />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
export default {
  components: {
    Footer,
    PageHeader,
    Nav,
    Profile,
  },
  head() {
    return {
      title: "THEVITAMINLAB | Profile",
    };
  },
};
</script>
