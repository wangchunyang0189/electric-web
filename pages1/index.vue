<template>
  <div class="web-container">
    <nav-bar></nav-bar> 
    <swiper-container class="swiper-box" init="false">
      <swiper-slide>
        <box1></box1>
      </swiper-slide>
      <swiper-slide>
        <box2></box2>
      </swiper-slide>
      <swiper-slide>
        <box3></box3>
      </swiper-slide>
      <swiper-slide>
        <box4></box4>
      </swiper-slide>
      <swiper-slide>
        <box0></box0>
      </swiper-slide>
    </swiper-container>
    <application></application>
    <case></case>
    <bottom></bottom>
    
  </div>
</template>
<script>
import Box0 from './box0.vue'
import Box1 from './box1.vue'
import Box2 from './box2.vue'
import Box3 from './box3.vue'
import Box4 from './box4.vue'
import NavBar from './components/NavBar.vue'
import Application from '../pages/Application.vue'
import Case  from './components/Case.vue'
import Bottom from './components/Bottom.vue'

export default {
  components: { Box0, Box1, Box2, Box3, Box4,NavBar,Application,Case,Bottom},
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const swiperEl = document.querySelector('swiper-container')
      const params = {
        loop: true,
        autoplay: {
          delay: 16000
        },
        injectStyles: [
          `
          .swiper-pagination {
            position: absolute;
            padding-left: 0;
            text-align: center;
            transition: .3s opacity;
            transform: translate3d(0, 0, 0);
            z-index: 10;
          }
          .swiper-horizontal>.swiper-pagination-bullets {
            bottom: 10vh;
          }
          .swiper-pagination-bullet {
            display: inline-block;
            border-radius: 4px;
            height: 7px;
            opacity: 1;
            width: 22px;
            transition: all .5s;
            margin: 0 3px;
            padding: 0;
            background: #717272;
          }

          .swiper-pagination-bullet-active {
            background: #fff;
            opacity: 1;
            width: 54px;
          }
          `
        ],
        pagination: {
          clickable: true,
          renderBullet: function (index, className) {
            return '<div class="' + className + '"></div>'
          }
        }
      }

      Object.assign(swiperEl, params)

      swiperEl.initialize()
    }
  }
}
</script>
<style lang="scss" scoped>
.web-container {
  width: 100vw;
  height: 100vh;
  overflow-x:hidden;
}
.web-container::-webkit-scrollbar{
   display: none;
}
.swiper-box{
  margin-top: 60px;
}
swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
