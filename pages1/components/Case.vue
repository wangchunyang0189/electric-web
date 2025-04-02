<!--案例-->
<template>
  <div class="case-wrap">
    <h1>行业应用场景</h1>
    <h5>概括性文字介绍一句概括性文字介绍一句概括性文字介绍</h5>
    <div class="menu">
      <a
        v-for="(item, index) in caseTypeData"
        :key="index"
        :class="active === index ? 'active' : ''"
        @click="selectType(index)"
      >
        <img :src="item.caseIcon" />
        <span>{{ item.caseName }}</span>
        <div class="empty"></div>
      </a>
    </div>
    <div class="list">
      <div class="list-item" v-for="(item, index) in caseData" :key="index">
        <h4>{{item.caseTitle}}</h4>
        <img :src="item.caseImage" />
      </div>
    </div>
  </div>
</template>
<script>
import { caseTypeData,caseDataList } from './config.js'
export default {
  data() {
    return {
      active: 0,
      caseTypeData,
      caseData:[]
    }
  },
  watch:{
    active:{
      handler(newVal,oldVal){
          const caseType=this.caseTypeData[this.active].caseName
          const filter=caseDataList.filter(f=>{
            return f.caseType===caseType
          })
          this.caseData=[...filter]
        },
      deep:true,
      immediate:true
    }
  },
  methods: {
    selectType(index) {
      this.active = index
    }
  }
}
</script>
<style lang="scss" scoped>
.case-wrap {
  padding: 60px 200px;
  // height: 1470px;
  text-align: center;
  background: #363d3c;
}
.case-wrap h1 {
  font-family: Source Han Sans;
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
}
.case-wrap h5 {
  font-family: Source Han Sans;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  color: #ffffff;
  margin: 40px 0;
}
.menu {
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr); /* 三列，每列占据1/3空间 */
  grid-column-gap: 30px; /* 网格项之间的间隙 */
  grid-row-gap: 10px;
  text-align: center;
}
.menu a {
  display: flex;
  width: 160px;
  height: 130px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
}
.menu a img {
  width: 40px;
  height: 40px;
}
.menu a span {
  font-family: Source Han Sans;
  font-size: 14px;
  font-weight: normal;
  line-height: 14px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 8px;
}
.empty {
  border: 16px solid transparent;
  border-top-color: #009983;
  position: absolute;
  bottom: -30px;
  left: calc(50% - 16px);
  opacity: 0;
  transition: all 1s;
}
.active {
  background-color: #009983 !important;
  .empty {
    opacity: 1;
  }
}
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 三列，每列占据1/3空间 */
  grid-column-gap: 15px; /* 网格项之间的间隙 */
  grid-row-gap: 30px;
  margin-top: 40px;
}
.list-item {
  width: 480px;
  height: 320px;
  position: relative;
}
.list-item img {
  width: 480px;
  height: 320px;
  display: block;
}
.list-item h4 {
  position: absolute;
  top: -24px;
  left: 0;
  width: 480px;
  height: 50px;
  line-height: 50px;
  border-radius: 16px 16px 0px 0px;
  opacity: 1;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  font-family: Source Han Sans;
  font-size: 18px;
  color: #ffffff;
}
</style>
