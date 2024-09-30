<template>
  <Swiper
    :modules="[Pagination]"
    :loop="true"
    :pagination="{ clickable: true, renderBullet: renderBulletFunction }"
    class="swiper-box"
  >
    <SwiperSlide
      ><div class="box box1">
        <div class="box-content">
          <h1>主营业务</h1>
          <p>
            承接交、直流各型电机，变压器，发电机等维修，以及工厂控制线路维修，安装等工程。
          </p>
        </div>
      </div></SwiperSlide
    >
    <SwiperSlide><div class="box box2"></div></SwiperSlide>
    <SwiperSlide><div class="box box3"></div></SwiperSlide>
  </Swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// 自定义分页指示器的渲染函数
const renderBulletFunction = (index, className) => {
  return `<div class="${className}"></div>`;
};
</script>
<style lang="scss" scoped>
.swiper.swiper-box {
  width: 100%;
  height: 100%;
  & > :deep(.swiper-pagination) {
    width: auto;
    position: absolute;
    left: 10vw;
    bottom: 20vh;
    .swiper-pagination-bullet {
      width: 22px;
      height: 7px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.7);
      transition: all 0.5s;
    }
    .swiper-pagination-bullet-active {
      width: 54px;
      background: rgba(255, 255, 255, 1);
    }
  }
}

.box {
  width: 100%;
  height: 100%;
  position: relative;
  color: white;
  &-content {
    position: absolute;
    left: 10vw;
    top: 30vh;
    h1 {
      font-size: 60px;
      font-weight: 700;
      line-height: 84px;
    }
    p {
      font-size: 18px;
      height: 72px;
      line-height: 36px;
      max-width: 760px;
    }
  }
}
.box1 {
  background: url("~/assets/img/电机.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
