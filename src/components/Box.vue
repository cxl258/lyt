<template>
  <div class="div">
    
   <van-list>
      <index v-for="(item, index) in list" :key="index" :item="item" :id="index"></index>
    </van-list> 
    
  </div>
</template>

<script>
import login from "../api/user";
import index from  './index.vue'
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async onload() {
      const { data } = await login(this.list);
      this.list = data;
      console.log(data);
    },
  },
  created() {
    this.onload();
  },
  components:{
    index
  }
};
</script>

<style >

</style>
