<template>
  <div>
    <Nav />
    <Slider />
    <SubArea />
    <SpaceToMake />
    <ExploreCodesk />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import BestCreative from "../components/BestCreative";
import SpaceToMake from "../components/SpaceToMake";
import Trusted from "../components/Trusted";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Funfacts from "../components/Funfacts";
import WeKnows from "../components/WeKnows";
import ChangingArea from "../components/ChangingArea";
import Testimonial from "../components/Testimonial";
import CallToAction from "../components/CallToAction";
import Blog from "../components/Blog";
import CompanyLogo from "../components/CompanyLogo";
import Footer from "../components/Footer";
import FindSpace from "../components/FindSpace";
import LandingArea from "../components/LandingArea";
import SubArea from "../components/SubArea";
import ExploreCodesk from "../components/ExploreCodesk";

export default {
  components: {
    Footer,
    CompanyLogo,
    Blog,
    CallToAction,
    Testimonial,
    ChangingArea,
    WeKnows,
    Funfacts,
    Gallery,
    Services,
    Trusted,
    SpaceToMake,
    BestCreative,
    Slider,
    Nav,
    FindSpace,
    LandingArea,
    SubArea,
    ExploreCodesk,
  },
};
</script>
