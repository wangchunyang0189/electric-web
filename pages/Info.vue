<template>
  <div class="info-container">
    <div class="info-box">
      <h1>广元市兴旺机电维修有限公司</h1>
      <div class="info-line"></div>
      <div class="info-text">公司位于四川省广元市利州区西路三段。</div>
      <div class="info-text">
        创建运营至今已有30余年，技术力量雄厚，目前是四川北部专业机电维修行业中领先的民营企业。
      </div>
      <div class="info-text">
        拥有一支高素质的专业技术人员队伍，有齐全的设备和完成工艺，科学的管理和丰富的实践经验。
      </div>
    </div>
    <img src="/img/电机1.jpeg" />
  </div>
</template>
<style lang="scss" scoped>
.info-container {
  box-sizing: border-box;
  width: 100%;
  padding: 20vh 18vw;
  display: flex;
  justify-content: space-between;
  & > img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    margin-top: 20px;
  }
  & > .info-box {
    width: 400px;
    & > h1 {
      color: #000;
    }
    & > .info-line {
      width: 50px;
      height: 4px;
      background-color: #026ae0;
      margin: 40px 0;
    }
    & > .info-text {
      color: #000;
      font-size: 14px;
    }
  }
}
</style>
