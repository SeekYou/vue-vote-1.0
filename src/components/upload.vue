<template>
  <div class="imgFile">
    <img v-if="data!=''" v-bind:src="data">
    <input type="file" title="" v-bind:id="name" v-on:change="pushImg($event)">
    <span v-if="data!=''" @click="delImg($event)"></span>
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

<style scoped>
  .imgFile {
    /*margin-right: 0.14rem;
    float: left;
    position: relative;
*/

 position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 0 10px;
  border: 1px solid #000;
}

img{
  position: relative;
  z-index: 2;
  width: 100%;
    height: 100%;
}
span{
  position: absolute;
  width: 20px;
  height: 20px;
  top: -10px;
  right: -10px;
  z-index: 3;
  background: url(../assets/images/closeimg.png) no-repeat scroll 0 0 transparent;
  background-size: cover;
}
a {
  color: #42b983;
}
input{
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /*opacity: 0;*/
  /*border: 1px solid #eee;*/
  /*background: rgba(0,0,0,0);*/
  /*background-color: transparent;*/
  background: url(../assets/images/addimg.jpg) no-repeat;
  background-size: 100% 100%;
  z-index: 1;
}
input::-webkit-file-upload-button,button {
  display: none;
}

/*.tips{
  position: absolute;
    top: 30%;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background: #ddd;
  display: inline-block;
    width: 100px;
    height: 100px;
    border: 1px solid #aaa;
    text-align: center;
    line-height: 100px;
}*/
</style>
