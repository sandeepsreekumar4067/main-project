<template>
  <NavBar/>
  <HomePage/>
  <SecondPage/>
  <ThirdPage/>
</template>

<script>
import HomePage from './pages/HomePage.vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../src/style/app.css'
import NavBar from './components/NavBar.vue';
import SecondPage from './pages/SecondPage.vue';
import ThirdPage from './pages/ThirdPage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    NavBar,
    SecondPage,
    ThirdPage
  }
}
</script>
