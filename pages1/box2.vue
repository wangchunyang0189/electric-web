<template>
  <div class="box1-container">
    <image-play :imgs="imgs" :imgStyle="{ left: '40%', width: '60%' }"></image-play>
    <div class="text-view">
      <div class="text-head">农业监测</div>
      <div class="text-main">
        <p class="text-main-p">
          基于遥感农业智能分析技术，提供自动化作物识别、耕地面积测算、长势监测能力，全面、及时把握作物生长状态，解决农业融资场景中授信难、监控难的问题，赋能乡村金融，强化乡村振兴金融服务。
        </p>
        <p>主粮作物识别&nbsp;|&nbsp;经济作物识别<br />作物长势监测&nbsp;|&nbsp;多期非粮化监测</p>
      </div>
      <btn @click="handleClick"></btn>
    </div>
  </div>
</template>
<script>
import Btn from './btn.vue'
import ImagePlay from './imagePlay.vue'
import introduce_raohe_202308 from '@/assets/image/introduce_raohe_202308.png'
import introduce_feicheng_202304202308 from '@/assets/image/introduce_feicheng_202304-202308.png'

export default {
  components: { Btn, ImagePlay },
  data() {
    return {
      imgs: [{ src: introduce_raohe_202308 }, { src: introduce_feicheng_202304202308 }]
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
