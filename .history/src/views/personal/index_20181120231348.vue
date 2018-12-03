<template>
    <div>123</div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell } from "vux";

export default {
  name: 'personal',
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data() {
    return {
      tabIndex: 0
    };
  },
  created() {
    console.log("页面初始化完成111");
    this.$fetch("account/queryUserInfo.htm").then(response => {
      console.log(response);
    });
  },
  mounted() {
    console.log("页面初始化完成222");
    this.$nextTick(() => {
      console.log("页面初始化完成333");
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
