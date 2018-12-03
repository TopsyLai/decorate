<template>
  <div class="personal">
      <div class="head">
        <img :src="'/api'+queryUserInfo.imgSrc" alt="头像">
        <div class="info">
          <p>{{queryUserInfo.userName}}</p>
        </div>
      </div>
      
		<group>
      <x-switch title="接活"></x-switch>
	  </group>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell，XSwitch  } from "vux";

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    XSwitch,
    Cell
  },
  data() {
    return {
      tabIndex: 0,
      queryUserInfo: {}
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
.head {
}
.head > img {
  float: left;
  width: 75px;
  height: 75px;
  display: block;
  line-height: 75px;
  margin: 0 5px;
  background: #000;
  border-radius: 50%;
  color: #fff;
  text-align: center;
}
.info {
  text-align: left;
  line-height: 75px;
}
</style>
