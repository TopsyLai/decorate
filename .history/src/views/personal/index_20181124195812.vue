<template>
  <div class="personal">
      <div class="head">
        <img :src="'/api'+queryUserInfo.imgSrc" alt="头像">
        <div class="info">
          <p>姓名： {{queryUserInfo.realName || '未实名'}}</p>
          <p>用户名： {{queryUserInfo.userName}}</p>
        </div>
      </div>
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
.head{}
.head>img{float: left;}
.info{text-align: left}
</style>
