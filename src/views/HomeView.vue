<template>
  <v-layout row wrap text-center>
    <v-flex xs12 >
      <v-parallax id="parallax" :src="require('@/assets/discovery.jpg')" height="800" >
        <v-layout column align-center justify-center class="white--text">
          <h1 id="titleText" class="red--text mb-2 display-3 font-weight-bold font-italic">Vision AI 서비스</h1>
          <div class="deep-purple--text text--lighten-3 subheading mb-3 headline font-weight-bold">
             Image Classification & Text Understanding
          </div>

          <div class="text-center ma-10">
            <v-btn class="mx-2 ma-1" x-large color="blue body-1" dark @click="classifier">이미지분류</v-btn>
            <v-btn class="mx-2 ma-1" x-large color="blue body-1" dark @click="ocr">텍스트인식</v-btn>
            <v-btn class="mx-2 ma-1" x-large color="blue body-1" dark @click="dashboard">대시보드</v-btn> 
            <v-btn class="mx-2 ma-1" x-large color="blue body-1" dark @click="about">Contact</v-btn>
          </div>

        </v-layout>
      </v-parallax>
    </v-flex>
  </v-layout>
</template>


<script>
  export default {
    methods: {
      classifier: function () {
        this.$router.push('/classifier');
      },      
      ocr: function () {
        this.$router.push('/ocr');
      },
      dashboard: function () {
        this.$router.push('/dashboard');
      },
      about: function () {
        this.$router.push('/about');
      },             
    },
  }
</script>
