<template>
  <h1>pageIndex</h1>
</template>

<script>
  export default {
    name:'pageIndex',
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
