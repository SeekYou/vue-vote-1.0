<template>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item">Slide 1
      <!-- <img src="http://img.soufun.com/kanli/2016_12/02/46/33/pic/004890497500.png" alt=""> -->
    </swiper-slide>
    <swiper-slide class="swiper-item slide-two">
    <div class="container">
      <div class="top">
        <p class="sort">
          <span class="active">编号</span>
          <span>票数</span>
        </p>
        <p class="search">
          <input type="text" placeholder="输入编号或名称" maxlength="15">
          <i class="searchBtn"></i>
        </p>
        <p class="introduce">活动首页</p>
      </div>

      <div class="listBox">
        <div class="numBox" id="contentBox">

          <div class="list">
            <div class="desc_box">
              <img src="http://img.soufun.com/kanli/2017_08/01/28/42/pic/006371467200.jpg" />
            </div>

            <div class="details clearfix">
              <div class="detailsLeft">
                <p>测试</p>
                <p><span>0</span>票</p>
              </div>
              <div class="detailsRight">
                <p>投票</p>
                <span class="none">+1</span>
              </div>
            </div>

            <span class="number">00001</span>
          </div>

          <div class="list">
            <div class="desc_box">
              <img src="http://img.soufun.com/kanli/2017_08/01/28/42/pic/006371467200.jpg" />
            </div>

            <div class="details clearfix">
              <div class="detailsLeft">
                <p>测试</p>
                <p><span>0</span>票</p>
              </div>
              <div class="detailsRight">
                <p>投票</p>
                <span class="none">+1</span>
              </div>
            </div>

            <span class="number">00001</span>
          </div>

        </div>
      </div>
    </div>
    </swiper-slide>

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
    // text-align: center;
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
  .slide-two {
    background: #eee;
  }

  .top {
    position: absolute;
    left: 0;
    top: 0;
        width: 100%;
    background: #FFFFFF;
    box-shadow: 0 1px 5px #c9c9c9;
    padding: 0.22rem 0.24rem;
    box-sizing: border-box;
  }
  .sort {
        background: #f0f0f0;
    border: 1px solid #ed4747;
    border-radius: 0.1rem;
    height: 0.5rem;
    line-height: 0.5rem;
    float: left;
    width: 1.54rem;
  }
  .sort .active {
    background: #ed4747;
    color: #FFFFFF;
  }
  .sort span {
        width: 50%;
    font-size: 0.26rem;
    text-align: center;
    border-radius: 0.1rem;
    color: #666666;
    float: left;
    height: 0.5rem;
    line-height: 0.5rem;
    z-index: 1;
  }
  .search {
    float: left;
    width: 3.6rem;
    height: 0.54rem;
    position: relative;
    margin-left: 0.26rem;
  }
  .search input {
    width: 100%;
    border: 1px solid #CCCCCC;
    background: #e6e6e6;
    padding-left: 0.1rem;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    border-radius: 0.1rem;
    height: 0.54rem;
    line-height: 0.54rem;
  }
  .searchBtn {
    position: absolute;
    right: 0.22rem;
    top: 0.1rem;
    width: 0.33rem;
    height: 0.33rem;
    background: url(../assets/images/search.png) no-repeat;
    background-size: cover;
  }
  .introduce {
        float: right;
    width: 1.32rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #fe6f95;
    font-size: 0.24rem;
    color: #FFFFFF;
    text-align: center;
    border-radius: 0.08rem;
  }
  .listBox {
    position: absolute;
    top: 0.94rem;
    width: 100%;
    background: #e6e6e6;
    padding: 0.2rem 0.14rem;
    box-sizing: border-box;
  }
  #contentBox {
        position: relative;
    width: 100%;
  }
  .list {
    position: relative;
    display: inline-block;
    left: 0;
    top: 0;
    width: 3.4rem;
    margin: 0 0.11rem 0.2rem;
    border-radius: 10px;
    overflow: hidden;
  }
  .desc_box img {
    width: 100%;
    display: block;
  }
  .details {
    width: 100%;
    background: #FFFFFF;
    padding: 0.1rem;
    box-sizing: border-box;
  }
  .clearfix {
    zoom: 1;
  }
  .detailsLeft {
    float: left;
    text-align: start;
  }
  .detailsLeft p:nth-child(1) {
        line-height: 0.38rem;
    color: #666666;
    font-size: 0.26rem;
    width: 2.12rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .clearfix:after {
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
  }
  .detailsLeft p:nth-child(2) {
    line-height: 0.38rem;
    color: #999999;
    font-size: 0.22rem;
  }
  .detailsLeft p:nth-child(2) span {
    color: #fe6f95;
    font-weight: bold;
  }
  .detailsRight {
    float: right;
    position: relative;
    margin-top: 0.15rem;
  }
  .detailsRight p {
    width: 0.92rem;
    height: 0.48rem;
    line-height: 0.48rem;
    text-align: center;
    color: #FFFFFF;
    background: #ed4747;
    font-size: 0.3rem;
    border-radius: 4px;
  }
  .detailsRight span {
        position: absolute;
    right: 0.88rem;
    bottom: 0.18rem;
    font-size: 0.5rem;
    color: #fe6f95;
    font-weight: bold;
  }
  .number {
        position: absolute;
    left: 0;
    top: 0;
    width: 1.02rem;
    height: 0.42rem;
    line-height: 0.42rem;
    font-size: 0.18rem;
    color: #FFFFFF;
    background: rgba(0,0,0,0.5);
    text-align: center;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
