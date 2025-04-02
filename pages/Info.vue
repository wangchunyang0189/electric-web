<template>
  <div class="info-container">
    <div class="info-box">
      <h1>广元市兴旺机电维修有限公司</h1>
      <div class="info-line"></div>
      <div class="info-text">
        广元市旺盛机电维修厂位于四川省广元市利州区凤麟路与金福路交口相邻双墩绕城高速交通便利，本公司技术力量雄厚，检测设备齐全，目前是合肥专业电机，变压器维修行业中规模较大的民营企业，占地面积2000多平米，拥有一支高素质的职工队伍，技术人员和工程师有齐全的设备和完成工艺，科学的管理和丰富的实践经验，设有大型电机修理车间、变压器维修车间、绕组制作车间和金加工车间
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
