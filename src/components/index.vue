<template>
  <div>
    <h2 @click="add()">{{ item.dabiaoti }}</h2>
    <div class="text">
      {{ item.neirong }}
    </div>
    <div class="bottom">
      <span>{{ item.zuozhe }}</span>
      <span>{{ item.createtime }}</span>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    id: [Number, String],
  },
  methods: {
    add() {
      this.$router.push({
        path: "/art/" + this.id,
      });
    },
  },
};
</script>

<style >
.div {
  margin: 0 auto;
  height: 100px;
  width: 500px;
}
h2 {
  font-size: 20px;
  color: red;
}
h4 {
  font-size: 12px;
}
.text {
  font-size: 14px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
