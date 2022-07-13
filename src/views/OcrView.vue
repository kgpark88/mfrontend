<template>
  <div>  
 
    <v-card class="mx-auto lighten-5 ma-10" max-width="1400px">
      <v-system-bar height="60" dark color="deep-purple lighten-1">
        <v-icon large>mdi-checkbox-marked-outline</v-icon>
        <span class="headline">Vision AI - 텍스트 인식</span>          
      </v-system-bar>
      <v-row no-gutters>
        <v-col cols="12">
        </v-col>
      </v-row>

      <v-row class='ma-2'>
        <v-col cols="12" md="3">
          <v-file-input
            v-model="chosenFile"
            accept="image/jpeg,image/gif,image/png"
            label="이미지 파일 업로드"
            outlined
            large
          ></v-file-input>
        </v-col>

        <v-col cols="12" md="3">
          <v-btn
            large
            class="ma-2"
            color="primary"
            @click="ocr"
            :disabled="process_dialog"
          >
            문서인식
          </v-btn>          
        </v-col>  

        <v-col cols="12" md="6">
        </v-col> 
      </v-row>

      <v-row class='ml-10 mr-10' dense>     
        <v-col cols="12" md="6">
          <v-row dense> 
            <v-col cols="12">
              <v-card-text class="headline font-weight-bold indigo--text"> 
                문서이미지 
              </v-card-text>
            </v-col>
          </v-row>
          <v-row> 
            <v-col cols="12">
              <v-img 
                contain
                lazy-src="@/assets/blank.png"
                :src="image_src(image_path)"  
                :width="max_width"
              >             
              </v-img>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="6">
          <v-row dense> 
            <v-col cols="12">
              <v-card-text class="headline font-weight-bold indigo--text"> 
                문서인식결과
              </v-card-text>
            </v-col>
            <v-col cols="12">
              <v-textarea
                class='ml-2 mr-2'
                outlined
                rows="15"
                clearable
                name="input-2"
                :value="ocr_text"
              ></v-textarea>            
            </v-col>            
          </v-row>
        </v-col>
      </v-row>
    </v-card>
      
    <v-layout align-center justify-center>
      <v-dialog v-model="process_dialog" hide-overlay persistent width="400" >
        <v-card color="primary" dark>
          <v-progress-linear
            :color="progress_color"
            indeterminate
            rounded
            height="150"
          >
            <v-card-text 
              class="text-h3 justify-center font-weight-bold white--text"  
              @click="process_dialog=false"
            > 
              {{progress_text}}
            </v-card-text>
          </v-progress-linear>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({  
    chosenFile: null,
    progress_text : '텍스트 인식',
    progress_color : 'deep-purple accent-4',
    process_dialog: false,
    max_width: '400px',
    disabled: false,

    ocr_text:"",
    image_path:"",
  }),
  watch: {
    process_dialog(val) {
      if (!val) return;
      setTimeout(() => (this.process_dialog = false), 10000);
    }
  }, 
  methods: {
    image_src(image) {
      return image === null ? '' : process.env.VUE_APP_API_SERVER + '/' + image
    },   
    ocr() {
      if (this.chosenFile) {
        this.process_dialog = true
        let url = process.env.VUE_APP_API_SERVER + '/ocr/ocr'
        let post_data = new FormData();
        post_data.append("file", this.chosenFile);
        axios.post(url, post_data).then((response) => {
          // console.log(response.data)  
          this.process_dialog = false
          this.image_path = response.data.image_path
          this.ocr_text = response.data.ocr_text       
        })
      } else {
        this.$swal.fire({
          icon: 'info',
          title: "이미지 파일을 선택 하세요."
        });
      }
    },
  }
}
</script>

