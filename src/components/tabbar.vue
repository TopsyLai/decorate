<template>
  <div class="tabMain" style="height:100%;">
		<view-box ref="viewBox">
			<router-view></router-view>
      <tabbar>
        <tabbar-item :selected="tabIndex=='index'">
          <x-icon slot="icon" type="android-apps" size="30"></x-icon>
          <span slot="label">攻略</span>
        </tabbar-item>
        <tabbar-item :selected="tabIndex=='find'">
          <x-icon slot="icon" type="ios-people" size="30"></x-icon>
          <span slot="label">找人</span>
        </tabbar-item>
        <tabbar-item :selected="tabIndex=='work'">
          <x-icon slot="icon" type="ios-build" size="30"></x-icon>
          <span slot="label">工作台</span>
        </tabbar-item>
        <tabbar-item :selected="tabIndex=='personal'">
          <x-icon slot="icon" type="ios-person" size="30"></x-icon>
          <span slot="label">个人中心</span>
        </tabbar-item>
      </tabbar>
		</view-box>
  </div>
</template>

<script>
import { ViewBox, Tabbar, TabbarItem, Group, Cell } from "vux";

export default {
  components: {
    ViewBox,
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data() {
    return {
      tabIndex: "index"
    };
  },
  mounted() {
    let to = this.$route.name;
    //console.log(to)
    this.tabIndex = to;
  },
  computed: {
    changeTabIndex(index) {
      this.tabIndex = index;
    }
  }
};
</script>
<style>
.weui-tabbar__icon svg {
  width: 100%;
  height: 100%;
}
.weui-tabbar__icon + .weui-tabbar__label {
  margin-top: 0 !important;
}
</style>
