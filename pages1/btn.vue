<template>
  <div class="text-btn" @click="handleClick">
    <span>{{ text }}</span>
    <svg data-v-6431680f="" viewBox="0 0 24 24" width="1.2em" height="1.2em">
      <path
        fill="currentColor"
        d="M15.71 12.71a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-3-3a1 1 0 0 0-1.42 1.42l1.3 1.29H9a1 1 0 0 0 0 2h3.59l-1.3 1.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0ZM22 12a10 10 0 1 0-10 10a10 10 0 0 0 10-10ZM4 12a8 8 0 1 1 8 8a8 8 0 0 1-8-8Z"
      ></path>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "立即体验"
    }
  },
  methods: {
    handleClick() {
      console.log("click");
      this.$emit('click')
    }
  }
};
</script>
<style lang="scss" scoped>
.text-btn {
  width: fit-content;
  margin-top: 30px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.016) 0px 2px;
  background: #009983;
  border-radius: 4px;
  padding: 12px 24px;
  display: inline-flex;
  align-items: center;
  & > span {
    margin-right: 10px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
    border-color: #e8eaed;
    color: #e8eaed;
  }
}
</style>
