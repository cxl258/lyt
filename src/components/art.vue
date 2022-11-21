<template>
  <div class="box">
    <h2>{{ list[id].dabiaoti }}</h2>
    <p>{{ list[id].zuozhe }}</p>
    <p>{{ list[id].neirong }}</p>
    <img :src="list[id].tupianurl"/>
    <span class="span">{{ list[id].createtime }}</span>
  </div>
</template>

<script>
import login from "@/api/user";
export default {
  data() {
    return {
      list: [],
      id: 0,
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
  mounted() {
    this.id = this.$route.params.id;
  },
};
</script>

<style>
.box{
width: 80%;
margin: 0  auto;
}
h2{
  text-align: center;
  font-size: 30px;
}
img{
   width: 200px;
   height: 200px;
}
.span{
display: block;
 margin-left: 71%;
}
</style>
