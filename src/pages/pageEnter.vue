<template>
  <div id="pageEnter">
    <vote-btn msg="活动首页" v-on:btnClickEvent='btnClickEvent'></vote-btn><br>
    <form @submit.prevent>

      <input type="text" placeholder="* 名称(15字以内)" v-model='user.name'><br>
    <input type="text" placeholder="简介(30字以内)" v-model='user.desc'><br>
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
          name: '',
          desc: '',
          image: $refs.upload.data
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
        console.log(user);
        console.log(this.user.name);
        console.log(this.user.desc);
        alert('submit')
      }
    }
  }
</script>
