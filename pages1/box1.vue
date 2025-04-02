<template>
  <div class="box1-container">
    <!-- <div id="map-view"></div> -->
    <video class="video-view" loop autoplay muted>
      <source src="@/assets/video/satellite.mp4" type="video/mp4" />
      您的浏览器不支持视频标签。
    </video>
    <div class="text-view">
      <div class="text-head">卫星遥感平台</div>
      <p class="text-main">
        基于自研AI+卫星遥感技术，打造一站式、全流程的遥感能力，为业务系统提供多样化、个性化的遥感监测服务。
      </p>
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
  mounted() {
    // this.init();
  },
  methods: {
    init() {
      this.MapGL = import.meta.env.VITE_IS_OUT_NET === 'true' ? window.BMapGL : window.ABCMapGL
      const map = new this.MapGL.Map('map-view', {
        forceRenderType: 'webgl',
        maxZoom: 15,
        enableTilt: true,
        enableMapClick: false,
        mapType: window.BMAP_EARTH_MAP,
        displayOptions: {
          skyColors: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
        }
      })
      map.enableScrollWheelZoom(true)
      map.disableDoubleClickZoom()
      map.centerAndZoom(new this.MapGL.Point(103.63381, 38.39351266), 3.9)
      map.setTilt(60)

      this.map = map
    },
    handleClick() {
      this.$router.push('landLead?isExhibition=true')
    }
  }
}
</script>
<style lang="scss" scoped>
.box1-container {
  background-color: rgb(0, 0, 0);
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
  left: 20vw;
  top: 0;
  & > :deep(.anchorBL) {
    display: none;
  }
}
.video-view {
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
  justify-content: flex-start;
  position: absolute;
  top: 20vh;
  left: 10vw;
  width: 80vw;
  z-index: 10;
}
.text-head {
  width: 100%;
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.7);
  line-height: 84px;
  margin-bottom: 32px;
  text-align: left;
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
</style>
