<template>
  <NavBar/>
  <HomeRender/>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../src/style/app.css'
import NavBar from './components/NavBar.vue';
import HomeRender from './pages/HomeRender.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HomeRender
  }
}
</script>
