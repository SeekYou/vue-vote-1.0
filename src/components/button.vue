<template>
  <button class="vote-btn" @click="btnClickEvent">
    <span>{{msg}}</span>
  </button>
</template>

<script>
  export default {
    props: {
      msg: {
        default: '投票'
      }
    },
    methods: {
      btnClickEvent: function(){
        // alert('children click')
        this.$emit('btnClickEvent');
      }
    }
  }
</script>
