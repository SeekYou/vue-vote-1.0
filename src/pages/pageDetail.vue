<template>
  <div id="pageDetail">
    <div class="detail_page">
      <router-link to="index">
        <div class="introduce_ditails more">更多精彩</div>
      </router-link>
      <div class="detailsBox">
        <div class="details_top">
          <div class="details_tip clearfix">
            <span id="bianhao">编号：{{bianhao}}</span>
            <p>
              <span id="count">{{count}}</span>票
            </p>
          </div>
          <div class="mainImg">
            <img :src='mainImgUrl' />
          </div>
          <p class="details_title">{{title}}</p>
          <p class="details_con">简介：{{desc}}</p>
        </div>
      </div>
    </div>
    <p class="enter">
    <router-link to='enter'>
      <img src="../assets/images/enter.png">
      <!-- <img src="/static/images/enter.png"> -->
    </router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'pageDetail',
    data() {
      return {
        // enterImg: './images/enter.png'
        // enterImg: '../../assets/images/enter.png'
        userId:this.$route.query.userId,
        bianhao: null,
        count: 2,
        mainImgUrl: 'http://img.soufun.com/kanli/2016_12/02/46/33/pic/004890497500.png',
        title: null,
        desc: null
      }
    },
    created () {
      this.$http.get(process.env.API_ROOT+'/api/getById?userId='+this.userId)
        .then(res => {
          console.log(res);
          console.log(res.data.result[0].signNo);
          this.bianhao = res.data.result[0].signNo;
          this.mainImgUrl = res.data.result[0].signImgUrl;
          this.title = res.data.result[0].signName;
          this.desc = res.data.result[0].signDesc;
        })
    }
  }
</script>

<style scoped>
  #pageDetail {
    width: 100%;
    height: 100%;
  }
  .enter {
    position: fixed;
    bottom: 0;
    left: 50%;
    margin: 0 -1.31rem;
    width: 2.63rem;
    height: 1.18rem;
    z-index: 1;
  }
  img {
    width: 100%;
  }
  .introduce_ditails {
    position: fixed;
    right: 0;
    top: 50%;
    color: #FFFFFF;
    font-size: 0.24rem;
    width: 0.5rem;
    padding: 0.15rem 0.25rem;
    height: 0.7rem;
    background: url(../assets/images/circle_more.png) no-repeat;
    background-size: cover;
    line-height: 0.36rem;
    text-align: center;
    z-index: 10;
  }
  .detailsBox {
    width: 100%;
    background: #e6e6e6;
    padding: 0.2rem 0.24rem;
    box-sizing: border-box;
  }
  .details_top {
    background: #FFFFFF;
    border-radius: 10px;
    width: 100%;
    padding: 0 0.6rem 0.5rem;
    box-sizing: border-box;
  }
  .details_tip {
    height: 0.94rem;
    line-height: 0.94rem;
    width: 100%;
  }
  .clearfix {
    zoom: 1;
  }
  .clearflx:after {
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
  }
  .details_tip span:nth-child(1) {
    font-size: 0.26rem;
    color: #333333;
    float: left;
  }
  .details_tip p {
    font-size: 0.26rem;
    color: #999999;
    float: right;
  }
  #count {
    font-size: 0.28rem;
    color: #e81919;
    font-weight: bold;
  }
  .mainImg {
    height: 4.98rem;
    overflow: hidden;
    position: relative;
  }
  .details_title {
    font-size: 0.3rem;
    height: 0.7rem;
    line-height: 0.7rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .details_con {
        font-size: 0.26rem;
    line-height: 0.36rem;
    color: #999999;
    word-break: break-all;
  }
</style>
