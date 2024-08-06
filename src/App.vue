<template>
  <NavBar/>
  <HomePage/>
</template>

<script>
import HomePage from './pages/HomePage.vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../src/style/app.css'
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    NavBar
  }
}
</script>
