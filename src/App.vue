<template>
  <div id="app">
    <navbar></navbar>
    <keep-alive>
      <router-view class="wrapper container"></router-view>
      <router-view name="wide" class="wrapper container-fluid"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  margin-bottom: 5rem !important;
}

/* @import '~bootstrap/dist/css/bootstrap.min.css'; */
/* @import '~bootstrap-vue/dist/bootstrap-vue.css'; */
@import '~font-awesome/css/font-awesome.min.css';
@import '~bulma/css/bulma.min.css';
</style>
