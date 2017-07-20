<template>
  <div class="imgFile">
    <img v-if="data!=''" v-bind:src="data">
  <input type="file" title="" v-bind:id="name" v-on:change="pushImg($event)">
  <span v-if="data!=''" @click="delImg($event)">删除</span>
  </div>
</template>

<script>
  export default {
    name: 'upload',
    data() {
      return {
        data: '',
        name: 'AA'
      }
    },
    methods: {
      pushImg: function(e){
        console.log('change');
        let file=e.target;
        let reader=new FileReader();
        console.log(file.files[0]);
        let realFile=file.files[0];
        let fileType=realFile.type.split('/')[0];
        if (fileType!=='image') {
          alert('请选择图片上传');
          this.data='';
          let dom=document.getElementById(this.name);
          console.log(dom);
          dom.value='';
          return false;
        }
        reader.readAsDataURL(realFile);
        var getPromise=new Promise(function(resolve,reject){
          reader.onload=function(){
            resolve(reader);
          };
          reader.onerror=function(){
            reject(reader);
          }
        })
        getPromise.then(data =>{
          this.data=data.result;
        }).catch(error => console.log(error))
        // getPromise.then(function(data){
        //   this.data=data.result;
        // }).catch(error => console.log(error))
      },
      delImg: function(e){
        console.log('delete');
        this.data='';
        let dom=document.getElementById(this.name);
        dom.value='';
      }
    }
  }
</script>
