<template>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item">Slide 1
      <!-- <img src="http://img.soufun.com/kanli/2016_12/02/46/33/pic/004890497500.png" alt=""> -->
    </swiper-slide>
    <swiper-slide class="swiper-item">Slide 2</swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name:'pageIndex',
    data() {
      return {
        swiperOption: {
          // pagination: '.swiper-pagination',
          direction: 'vertical',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
          mousewheelControl: true
        }
      }
    },
    beforeCreate: () => {
      console.log('beforeCreate');
    },
    created () {
      this.getResult()
    },
    methods: {
      getResult() {
        console.log(process.env);
        this.$http.get(process.env.API_ROOT+'/api/getResult')
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
      }
    }
  }
</script>


<style lang="scss">
  html,body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
  }
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
