<template>
  <div class="type-container">
    <h1>实际业务案例</h1>
    <div class="btn-box">
      <div
        v-for="btn in btns"
        :key="btn.name"
        :class="['btn-box-item', { 'btn-active': active === btn.name }]"
        @click="active = btn.name"
      >
        {{ btn.name }}
      </div>
    </div>
    <div class="type-box">
      <div v-for="item in items" :key="item.title" class="type-box-item">
        <img :src="`/img/${item.img}`" />
        <h5>{{ item.title }}</h5>
        <p>{{ item.content }}</p>
        <div class="time">时间：{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, shallowRef, computed } from "vue";
import { ELECTRIC_TYPE } from "../constant/index.js";

const projects = shallowRef(ELECTRIC_TYPE);

const active = ref(projects.value[0].type);
const btns = computed(() => {
  const res = [];
  projects.value.map(({ type }) => {
    if (res.indexOf(type) === -1) {
      res.push(type);
    }
  });
  return res.map((name) => {
    return { name };
  });
});
const items = computed(() => {
  return projects.value.filter(({ type }) => {
    return active.value === type;
  });
});
function getImageUrl(url) {
  return require(url);
}
</script>
<style lang="scss" scoped>
.type-container {
  width: 100%;
  padding: 20px 0;
  background-color: rgb(23, 24, 26);
  & > h1 {
    width: 100%;
    text-align: center;
    color: white;
  }
}
.btn-box {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  padding: 20px 18vw;
  &-item {
    padding: 0 20px;
    border-radius: 2px;
    border: 1px solid #fff;
    line-height: 36px;
    font-size: 14px;
    margin-left: 12px;
    color: #fff;
    background-color: rgba(232, 234, 237, 0.15);
    cursor: pointer;
    user-select: none;
    box-shadow: rgba(0, 0, 0, 0.016) 0px 2px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:first-child {
      margin-left: 0;
    }
  }
  &-item:focus {
    background-color: rgba(0, 0, 0, 0.25);
    border-color: #e8eaed;
    color: #e8eaed;
  }
  & > .btn-active {
    background-color: rgba(255, 255, 255, 0.9);
    color: rgba(47, 50, 56, 1);
  }
}
.type-box {
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px); /* 三列，每列占据1/3空间 */
  gap: 10px; /* 网格项之间的间隙 */
  padding: 0 18vw;
  & > &-item {
    justify-self: stretch;
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    & > img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
    & > h5 {
      margin: 10px 20px 10px;
      color: rgb(232 234 237);
      font-weight: 500;
      font-size: 20px;
    }
    & > p {
      margin: 0 20px;
      color: rgba(232, 234, 237, 0.7);
      font-size: 14px;
      margin-top: 8px;
    }
    & > .time {
      margin: 12px 20px 12px;
      color: rgba(232, 234, 237, 0.4);
      font-size: 12px;
    }
  }
}
</style>
