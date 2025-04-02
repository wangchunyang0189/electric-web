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
          <h1>广元市兴旺机电维修有限公司</h1>
          <p>
            成立于1994年，服务四川、陕西、甘肃多家企业，赢得广大客户信赖，是四川北部区域机电维修行业领先企业
          </p>
        </div>
      </div></SwiperSlide
    >
    <SwiperSlide
      ><div class="box box2">
        <div class="box-content box-content1">
          <h1>主营业务</h1>
          <p>
            承接交、直流各型电机，变压器，发电机，水泵等工业机械设备维修，以及工厂控制线路设计，安装，维修等工程。
          </p>
        </div>
      </div></SwiperSlide
    >
    <SwiperSlide
      ><div class="box box3">
        <div class="box-content">
          <h1>租售业务</h1>
          <p>
            售变压器、电动机、发电机、变频器、智能软启动等工业设备。并提供各型变压器，电动机的租赁服务。
          </p>
        </div>
      </div></SwiperSlide
    >
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
    position: absolute;
    bottom: 10vh;
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
    left: 5vw;
    top: 30vh;
    h1 {
      font-size: 56px;
      font-weight: 700;
      line-height: 84px;
    }
    p {
      font-size: 18px;
      height: 72px;
      line-height: 36px;
      max-width: 35vw;
    }
  }
  &-content1 {
    left: auto;
    right: 5vw;
  }
}
.box1 {
  background: url("/img/电机5.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.box2 {
  background-image: url("/img/banner1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.box3 {
  background-image: url("/img/banner2.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
