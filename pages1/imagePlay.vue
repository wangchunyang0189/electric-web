<template>
  <div class="img-container" :style="imgStyle">
    <img
      ref="imgBox"
      class="img-box"
      v-for="(ig, index) of imgs"
      :key="ig.src"
      :src="ig.src"
      @animationend="handleAni(index)"
    />
  </div>
</template>
<script>
export default {
  props: {
    imgStyle: {
      type: Object,
      default: () => {}
    },
    imgs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    init() {
      const imgs = this.imgs
      const len = imgs.length
      if (len > 1) {
        let index = 0
        this.$refs.imgBox[index++ % len].classList.add('img-animate')
        this.timer = setInterval(() => {
          this.$refs.imgBox[index++ % len].classList.add('img-animate')
        }, 4000)
      } else if (len === 1) {
        this.$refs.imgBox[0].classList.add('img-show')
      }
    },
    handleAni(index) {
      this.$refs.imgBox[index].classList.remove('img-animate')
    }
  }
}
</script>
<style lang="scss" scoped>
.img-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.img-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1);
}
.img-animate {
  animation:
    opacityAnimation 4s,
    scaleAnimation 4s;
}
.img-show {
  opacity: 1;
}
@keyframes opacityAnimation {
  0% {
    opacity: 0;
  }
  12.5% {
    opacity: 1;
  }
  87.5% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes scaleAnimation {
  0% {
    transform: scale(1);
  }
  12.5% {
    transform: scale(1);
  }
  87.5% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
