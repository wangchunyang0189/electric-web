<template>
  <div class="box0-container">
    <img class="img-view" src="@/assets/image/introduce_ai_bg.jpg" />
    <div class="text-view">
      <div class="text-head">自研AI模型能力</div>
      <div class="text-main">
        <p class="text-main-p">
          自研AI+卫星遥感模型，基于DeepLab、CNN等机器学习和深度学习算法，结合遥感数据特征，为场景应用提供有力支撑。
        </p>
        <p>图像分类&nbsp;|&nbsp;语义分割<br />目标检测&nbsp;|&nbsp;变化检测</p>
      </div>
      <btn @click="handleClick"></btn>
    </div>
  </div>
</template>
<script>
import Btn from './btn.vue'

export default {
  components: { Btn },
  data() {
    return {}
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
.box0-container {
  background-color: #000;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease;
  position: relative;
  overflow: hidden;
}
.img-view {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
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
