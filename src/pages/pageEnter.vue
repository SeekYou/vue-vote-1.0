<template>
  <div id="pageEnter">
    <vote-btn msg="活动首页" v-on:btnClickEvent='btnClickEvent'></vote-btn><br>
    <form @submit.prevent>

      <input type="text" placeholder="* 名称(15字以内)" v-model='user.signName'><br>
      <input type="text" placeholder="简介(30字以内)" v-model='user.signDesc'><br>
      <span>* 上传图片(最多上传三张，第一张为封面)</span><br>
      <vote-upload ref="upload"></vote-upload>
      <vote-btn msg='提交' v-on:btnClickEvent='submit'></vote-btn>

    </form>

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
        }
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
        }).then(function(res){
          console.log(res);
        }).catch(function(err){
          console.log(err);
        })
      }
    }
  }
</script>
