<template>
  <footer class="foot-container">
    <div class="credential-box hide-transition" data-v-03e75ab4="">
      <div class="number-content" data-v-03e75ab4="">
        <div data-v-03e75ab4="">广元市旺盛机电维修厂版权所有</div>
        <div
          @click="
            handleJump(
              'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51019002000967'
            )
          "
        >
          蜀公网安备51019002000967号
        </div>
        <div @click="handleJump('https://beian.miit.gov.cn/')">
          蜀ICP备11001597号
        </div>
      </div>
      <div class="network-content">增值电信业务经营许可证：川B2-20170025</div>
    </div>
  </footer>
</template>
<script setup>
function handleJump(url) {
  window.location.href = url;
}
</script>
<style lang="scss" scoped>
.foot-container {
  box-sizing: border-box;
  background-image: url("/img/bottom.jpg");
  background-size: cover;
  width: 100%;
  padding: 30px 18vw;
  border-top: solid 1px hsla(0, 0%, 100%, 0.28);
}
.credential-box {
  font-size: 14px;
  color: hsla(0, 0%, 100%, 0.5);
  line-height: 32px;
}
.number-content {
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-right: 14px;
  }
  & > a:focus {
    color: white;
  }
}
</style>
