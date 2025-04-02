<!--应用-->
<template>
  <div class="app-wrap">
    <h1>遥感平台能力</h1>
    <h5>
      基于自研AI+卫星遥感技术，打造
      站式、全流程的遥感能力，为业务系统提供多样化、个性化的遥感监测服务。
    </h5>
    <div class="app-list">
      <a class="app-item" v-for="(item, index) in appDataList" :key="index">
        <img :src="item.appIcon" />
        <span>{{ item.appName }}</span>
      </a>
    </div>
  </div>
</template>
<script>
import { appDataList } from '../pages1/components/config.js'
export default {
  data() {
    return {
      appDataList
    }
  },
  computed: {
    getAssetImage() {
      return function (imgURL) {
        return new URL(imgURL, import.meta.url).href
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-wrap {
  text-align: center;
  padding: 60px 360px 70px 360px;
  background-color: black;
  background-size: cover;
  opacity: 1;
}
.app-wrap h1 {
  font-family: Source Han Sans;
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
}
.app-wrap h5 {
  font-family: Source Han Sans;
  font-size: 20px;
  font-weight: normal;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0em;
  font-variation-settings: 'opsz' auto;
  font-feature-settings: 'kern' on;
  color: #ffffff;
  margin: 40px 0 60px 0;
}
.app-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 三列，每列占据1/3空间 */
  gap: 10px; /* 网格项之间的间隙 */
  // height: 790px;
  overflow-y: auto;
  overflow-x: hidden;
}
.app-item {
  width: 200px;
  height: 160px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 35px 35px 0;
}
.app-item img {
  width: 48px;
  height: 48px;
}
.app-item span {
  font-family: Source Han Sans;
  font-size: 16px;
  font-weight: normal;
  line-height: 16px;
  color: #ffffff;
  margin-top: 8px;
}
</style>
