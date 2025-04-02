<template>
  <div class="box1-container">
    <image-play :imgs="imgs" :imgStyle="{ left: '40%', width: '60%' }"></image-play>
    <div class="text-view">
      <div class="text-head">灾害监测</div>
      <div class="text-main">
        <p class="text-main-p">
          基于多光谱、雷达等多源遥感数据，构建灾害监测与分析能力模型，快速响应急需求。
        </p>
        <p>洪水提取&nbsp;|&nbsp;火灾监测&nbsp;|&nbsp;滑坡检测</p>
      </div>
      <btn @click="handleClick"></btn>
    </div>
  </div>
</template>
<script>
import Btn from './btn.vue'
import ImagePlay from './imagePlay.vue'
import shouzai_tanghe from '@/assets/image/introduce_shouzai_tanghe_202408.png'
import shouzai_pingyi from '@/assets/image/introduce_shouzai_pingyi_202407.png'

export default {
  components: { Btn, ImagePlay },
  data() {
    return {
      imgs: [{ src: shouzai_tanghe }, { src: shouzai_pingyi }]
    }
  },
  mounted() {},
  methods: {
    handleClick() {
      this.$router.push('landLead?isExhibition=true')
    }
  }
}
</script>
<style lang="scss" scoped>
.box1-container {
  background-color: #2c2e3b;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease;
  position: relative;
  overflow: hidden;
}
#map-view {
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 25%;
}
.text-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 0 0 10vw;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #000 30%, transparent 60%);
}
.text-head {
  border-left: 8px solid #4584ff;
  margin-left: -36px;
  padding-left: 28px;
  width: 100%;
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  line-height: 84px;
  margin-bottom: 32px;
  text-align: left;
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.7);
}
.text-main {
  width: 80%;
  color: #fff;
  font-size: 18px;
  line-height: 36px;
  max-width: 25vw;
  text-align: left;
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.7);
}
.text-main-p {
  color: #eee;
}
</style>
