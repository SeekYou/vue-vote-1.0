<template>
  <div id="pageEnter">
    <div class="top clearfix">
      <router-link to="/">
      <!-- <vote-btn class="introduce" msg="活动首页" v-on:btnClickEvent='btnClickEvent'></vote-btn> -->
      <vote-btn class="introduce" msg="活动首页"></vote-btn>
      </router-link>
    </div>
    <div class="enterBox">
      <form @submit.prevent>
        <p>
          <input type="text" class="title" placeholder="* 名称(15字以内)" v-model  ='user.signName'>
        </p>
        <p>
          <textarea class="desc" placeholder="简介(30字以内)" v-model='user.signDesc' />
        </p>

        <span class="files_tip">* 上传图片(最多上传三张，第一张为封面)</span>
        <div class="demo">
          <vote-upload ref="upload"></vote-upload>
        </div>

        <vote-btn msg='提交' class="sub_btn" v-on:btnClickEvent='submit'></vote-btn>

      </form>
    </div>
  </div>
</template>

<script>
  import voteBtn from '../components/button.vue'
  import voteUpload from '../components/upload.vue'

  export default {
    name: 'pageEnter',
    data() {
      return {
        user: {
          signNo: 0,
          signName: '',
          signDesc: '',
          signImgUrl: '',
          isDelete: false
        },
        userId: null
      }
    },
    components: {
      'vote-btn': voteBtn,
      'vote-upload': voteUpload
    },
    methods: {
      btnClickEvent: function(){
        alert('click btnClickEvent')
      },
      submit:function(){
        // console.log(this.$refs.upload.data);
        this.user.signImgUrl=this.$refs.upload.data
        this.user.signNo++;
        var formData = JSON.stringify(this.user);
        // console.log(formData);
        // alert('submit')
        this.$http({
          method: 'post',
          url: 'http://localhost:3000/new_post',
          data: formData,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=utf-8'
          }
        })
        // .then(function(res){
        //   console.log(res);
        //   console.log(res.data._id);
        //   console.log(this); //获取不到this，改用箭头函数试试
        // }).catch(function(err){
        //   console.log(err);
        // })
        .then((res) => {
          console.log(this);
          // console.log(res.data._id);
          this.userId=res.data._id;
          // console.log(this.userId);
          this.$router.push({name:'datail',query: { userId: this.userId}})
        })
        .catch((err) => {
          console.log(err);
        })
        console.log(this.userId);
        // this.$router.push({name: 'detail'})

      }
    }
  }
</script>

<style scoped>
  #pageEnter {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .top{
    width: 100%;
    padding: 0.22rem 0.24rem 0;
    box-sizing: border-box;
    /*position: absolute;*/
  }
  .clearfix {
    zoom: 1;
  }
  .clearfix:after {
    content: '.';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .introduce {
        float: right;
    width: 1.32rem;
    height: 0.5rem;
    /*line-height: 0.5rem;*/
    background: #fe6f95;
    font-size: 0.24rem;
    color: #FFFFFF;
    text-align: center;
    border-radius: 0.08rem;
  }
  .enterBox {
    padding: 0 0.24rem;
    width: 100%;
    box-sizing: border-box;
  }
  .enterBox p {
    width: 100%;
    position: relative;
    margin: 0.26rem 0 0;
  }

  input[placeholder] {
    color: #666;
  }
  .title {
    width: 100%;
    height: 0.66rem;
    line-height: 0.66rem;
    border: 1px solid #999999;
    color: #333;
    padding-left: 0.26rem;
    font-size: 0.3rem;
    display: block;
    box-sizing: border-box;
    border-radius: 4px;
  }
  .desc {
    width: 100%;
    height: 1.3rem;
    font-size: 0.3rem;
    display: block;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #999999;
    color: #333;
    padding-left: 0.3rem;
    line-height: 0.66rem;
    resize: none;
  }
  .files_tip {
        display: block;
    font-size: 0.3rem;
    color: #999999;
    margin: 0.56rem 0 0.2rem;
        text-align: start;
    text-indent: 0.26rem;
  }
  .sub_btn {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.3rem;
    text-align: center;
    color: #FFFFFF;
    margin-top: 0.26rem;
    background: #ED4747;
    border: none;
    border-radius: 4px;
  }
</style>
