<template>
  <HomePage/>
  <SecondPage/>
  <FourthPage/>
  <ThirdPage/>
  <FifthPage/>
</template>

<script>
import FifthPage from './FifthPage.vue';
import FourthPage from './FourthPage.vue';
import HomePage from './HomePage.vue';
import SecondPage from './SecondPage.vue';
import ThirdPage from './ThirdPage.vue';

export default {
    name:'HomeRender',
    components:{
        HomePage,
        SecondPage,
        ThirdPage,
        FourthPage,
        FifthPage
    }
}
</script>

