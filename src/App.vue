<template>
  <NavBar/>
  <HomePage/>
  <SecondPage/>
</template>

<script>
import HomePage from './pages/HomePage.vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../src/style/app.css'
import NavBar from './components/NavBar.vue';
import SecondPage from './pages/SecondPage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    NavBar,
    SecondPage
  }
}
</script>
