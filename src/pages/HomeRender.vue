<template>
  <HomePage/>
  <SecondPage/>
  <ThirdPage/>
</template>

<script>
import HomePage from './HomePage.vue';
import SecondPage from './SecondPage.vue';
import ThirdPage from './ThirdPage.vue';

export default {
    name:'HomeRender',
    components:{
        HomePage,
        SecondPage,
        ThirdPage
    }
}
</script>

