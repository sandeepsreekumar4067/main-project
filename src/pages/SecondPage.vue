<template>
  <div class="secondPage-container">
    <div class="secondPage-first-container">
      <span class="animated-container-1 spa">
        Advocacy
        <p>
          "Empowering clients through expert advocacy, we combine legal
          expertise and AI-driven insights to ensure your voice is heard and
          rights protected."
        </p>
      </span>
      <span class="animated-container-2 spa">
        Consultation
        <p>
          "Access expert legal consultation with ease. Schedule personalized
          sessions to gain insights, answers, and solutions tailored to your
          needs."
        </p>
      </span>
      <span class="animated-container-3 spa">
        Expertise
        <p>
          "Leverage our unparalleled expertise, combining legal proficiency and
          AI innovation, to deliver precise solutions and exceptional service
          for every challenge."
        </p>
      </span>
    </div>
    <div class="secondPage-second-container">
      Revolutionizing legal support through AI innovation and
      <span class="animated-span"> professional excellence</span>
    </div>
    <div class="secondPage-third-container">
      <div class="secondContainer-title">Representing Clients in</div>
      <div class="third-container-buttons">
        <span>Corporate Law</span>
        <span>Criminal Law</span>
        <span>Real Estate Law</span>
      </div>
    </div>
  </div>
</template>

<script>
import "../style/secondpage.css";
import { gsap } from "gsap";
export default {
  name: "SecondPage",
  data() {
    return {};
  },
  mounted() {
    gsap.from('.spa',{
      scrollTrigger:{
        trigger:'.secondPage-first-container',
        start:'top 70%',
        toggleActions:'play pause resume reverse'
      },
      xPercent:-100,
      opacity:0,
      stagger:0.4,
      duration:1.5,
    })
    gsap.from('.secondPage-second-container',{
      scrollTrigger:{
        trigger:'.secondPage-second-container',
        start:'top 70%',
        toggleActions:'play pause resume reverse'
      },
      xPercent:-100,
      opacity:0,
      stagger:0.4,
      duration:1.5,
    }
    )
    gsap.from('.animated-span',{
      scrollTrigger:{
        trigger:'.animated-span',
        start:'top 60%',
        toggleActions:'play pause resume reverse'
      },
      xPercent:-100,
      opacity:0,
      duration:1.5,
    }
    )
    gsap.from('.secondContainer-title',{
      scrollTrigger:{
        trigger:'.secondPage-third-container',
        start:'top 70%',
        toggleActions:'play pause resume reverse'
      },
      delay:0.4,
      xPercent:-100,
      opacity:0,
      duration:1.5,
    })
    gsap.from('.third-container-buttons',{
      scrollTrigger:{
        trigger:'.secondPage-third-container',
        start:'top 70%',
        toggleActions:'play pause resume reverse'
      },
      delay:0.7,
      xPercent:-100,
      stagger:0.4,
      opacity:0,
      duration:1.5,
    })
  },
};
</script>