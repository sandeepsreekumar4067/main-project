<template>
  <HomePage/>
  <SecondPage/>
  <FifthPage2/>
  <FourthPage/>
  <ThirdPage/>
</template>

<script>
import FifthPage2 from './FifthPage2.vue';
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
        FifthPage2
    }
}
</script>

