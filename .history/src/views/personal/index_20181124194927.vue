<template>
    <div class="head">
      <img :src="queryUserInfo.imgSrc" alt="">
    </div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell } from "vux";

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data() {
    return {
      tabIndex: 0,
      queryUserInfo: {},
    };
  },
  created() {
    let self = this;
    this.$fetch("account/queryUserInfo.htm").then(response => {
      self.queryUserInfo = response.data;
    });
  },
  computed: {
    changeTabIndex(index) {
      this.tabIndex = index;
    }
  }
};
</script>
<style scoped>
.weui-tabbar__icon svg {
  width: 100%;
  height: 100%;
}
.weui-tabbar__icon + .weui-tabbar__label {
  margin-top: 0 !important;
}
</style>
