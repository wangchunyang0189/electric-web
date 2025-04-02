<!--导航-->
<template>
  <div class="nav-bar-wrap">
    <img class="logo" src="../../../assets/image/logo.png" />
    <div class="menu">
      <nav class="nav">
        <a
          v-for="(item, index) in navList"
          :key="index"
          :class="active === item.key ? 'active' : ''"
          @click="selectNav(item)"
        >
          {{ item.name }}
        </a>
      </nav>
      <div class="userinfo">
        <img src="../../../assets/image/user_icon.png" />
        <span>用户名称</span>
      </div>
      <div class="light-beam"></div>
    </div>
    <div class="dot">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <img src="../../../assets/image/header_line.png" class="line" />
  </div>
</template>
<script>
export default {
  props: {
    currentMenu: {
      type: Number,
      default: 0
    }
  },
  watch: {
    currentMenu: {
      handler(newVal, oldVal) {
        this.active = this.currentMenu
      },
      deep: true,
      immediate: true
    }
  },
  data() {
    return {
      active: 0,
      navList: [
        {
          key: 0,
          name: '首页',
          url: '/web'
        },
        {
          key: 1,
          name: '应用案例',
          url: '/landLead?isExhibition=true'
        },
        {
          key: 2,
          name: '项目管理',
          url: '/projectManagement/usage'
        },
        {
          key: 3,
          name: '任务管理',
          url: ''
        },
        {
          key: 4,
          name: '数据管理',
          url: ''
        }
      ]
    }
  },
  methods: {
    selectNav(item) {
      this.active = item.key
      if (item.url) {
        this.$router.push(item.url)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-bar-wrap {
  width: 100vw;
  height: 60px;
  background-image: url('../../../assets/image/header_bg.png');
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
}
.logo {
  width: 640px;
  height: 80px;
}
.dot {
  width: 100px;
  position: absolute;
  top: 72px;
  left: 305px;
  display: flex;
}
.dot .box {
  width: 26px;
  height: 8px;
  margin: 0 -2px;
  background-size: cover;
  background-position: center;
  animation: changeBackground 1s infinite ease-in-out;
}

.dot .box:nth-child(1) {
  background-image: url('../../../assets/image/header_yellow.png');
  animation-delay: 0.2s;
}
.dot .box:nth-child(2) {
  background-image: url('../../../assets/image/header_green.png');
  animation-delay: 0.4s;
}
.dot .box:nth-child(3) {
  background-image: url('../../../assets/image/header_green.png');
  animation-delay: 0.6s;
}
@keyframes changeBackground {
  0% {
    background-image: url('../../../assets/image/header_yellow.png');
  }
  33.33% {
    background-image: url('../../../assets/image/header_green.png');
  }
  66.66% {
    background-image: url('../../../assets/image/header_green.png');
  }
  // 100% {
  //   background-image:  url('../../../assets/image/header_green.png');
  // }
}
.line {
  width: 80px;
  height: 2px;
  position: absolute;
  top: 72px;
  left: 380px;
}
.menu {
  flex: 1;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.light-beam {
  position: absolute;
  bottom: 0;
  width: 200px; /* 光束的宽度 */
  height: 3px; /* 光束的高度 */
  // background:#ADFFF3; // 渐变

  // backdrop-filter: blur(4px);
  // filter: blur(3px);
  // box-shadow: 0px 0px 10px 0px #ADFFF3;
  // animation: flow 5s linear infinite; /* 动画配置 */
}

@keyframes flow {
  0% {
    left: 0; /* 起始位置 */
    opacity: 1; /* 初始透明度为0 */
  }
  50% {
    left: 100%; /* 流动到容器的右边 */
    opacity: 1; /* 最大透明度 */
  }
  100% {
    left: 105%; /* 稍微超出容器右边，用于循环 */
    opacity: 1; /* 重新回到透明状态 */
  }
}
.nav a {
  display: inline-block;
  width: 106px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: white;
  font-size: 16px;
}
.nav .active {
  color: white;
  font-size: 16px;
  background: linear-gradient(
      270deg,
      rgba(0, 153, 131, 0.02) 0%,
      rgba(255, 255, 255, 0.08) 52%,
      rgba(0, 153, 131, 0.02) 100%
    ),
    linear-gradient(180deg, rgba(0, 178, 153, 0.4) 0%, rgba(0, 153, 131, 0.8) 100%);
  box-sizing: border-box;
  border-width: 0px 1px 0px 1px;
  border-style: solid;
  border-image: linear-gradient(180deg, rgba(0, 153, 131, 0) 0%, #00b299 100%) 0 1 0 1;
}
.userinfo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
}
.userinfo img {
  width: 32px;
  height: 32px;
}
.userinfo span {
  margin-left: 12px;
  font-family: Source Han Sans;
  font-size: 14px;
  color: white;
}
</style>
