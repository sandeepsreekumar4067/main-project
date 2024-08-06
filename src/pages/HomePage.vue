<template>
    <div class="homePage-container">
        <div class="homePage-title-container">
            <div class="homePage-title">
                <span>
                    Providing Top-tier
                </span>
                <span id="greyTitle">
                    legal services.
                </span>
                <span id="subtitle">
                    Bravery courage fear and love in times of war
                </span>
                <div class="contact-container">
                    <span>
                        <i class="bi bi-telephone-fill"></i>
                        <p>Call us : 0123456789</p>
                    </span>
                    <span>
                        <i class="bi bi-envelope-fill"></i>
                        <p>email : someone@gmail.com</p>
                    </span>
                </div>
            </div>
        </div>
        <div class="homepage-image-container">

        </div>
    </div>
</template>

<script>
import '../style/homepage.css'
import homeImage from '../assets/homepageimage.jpg'
export default {
    name:'HomePage',
    data(){
        return{
            homeImage:homeImage
        }
    }
}
</script>
