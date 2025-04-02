<template>
  <div class="box1-container">
    <image-play :imgs="imgs" :imgStyle="{ left: '2%', width: '60%' }"></image-play>
    <div class="img-mask"></div>
    <div class="text-view">
      <div class="text-head">工业监测</div>
      <div class="text-main">
        <p class="text-main-p">
          基于高精遥感影像与遥感分析技术，对工业项目实施进度与运营情况进行周期性、多维度评估，为贷前调查、贷后监测提供新方式。
        </p>
        <p>房地产实施监测&nbsp;|&nbsp;光伏监测<br />水电站检测&nbsp;|&nbsp;风电监测</p>
      </div>
      <btn @click="handleClick"></btn>
    </div>
  </div>
</template>
<script>
import Btn from './btn.vue'
import ImagePlay from './imagePlay.vue'
import introduce_gongye1 from '@/assets/image/introduce_gongye1.jpg'
import introduce_gongye2 from '@/assets/image/introduce_gongye2.jpg'

export default {
  components: { Btn, ImagePlay },
  data() {
    return {
      imgs: [{ src: introduce_gongye1 }, { src: introduce_gongye2 }]
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
.img-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 60%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(90deg, #000 0%, transparent 10%);
}
.text-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 10vw 0 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #000 30%, transparent 60%);
}
.text-head {
  border-right: 8px solid #4584ff;
  margin-right: -36px;
  padding-right: 28px;
  width: 100%;
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  line-height: 84px;
  margin-bottom: 32px;
  text-align: right;
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.7);
}
.text-main {
  width: 80%;
  color: #fff;
  font-size: 18px;
  line-height: 36px;
  max-width: 25vw;
  text-align: right;
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.7);
}
.text-main-p {
  color: #eee;
}
</style>
