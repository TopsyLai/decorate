<template>


  <tabbar>
    <tabbar-item v-model="tabIndex" @tap="changeTabIndex(0)">
      <x-icon slot="icon" type="android-apps" size="30"></x-icon>
      <span slot="label">攻略</span>
    </tabbar-item>
    <tabbar-item v-model="tabIndex" @tap="changeTabIndex(1)">
      <x-icon slot="icon" type="ios-people" size="30"></x-icon>
      <span slot="label">找人</span>
    </tabbar-item>
    <tabbar-item v-model="tabIndex" @tap="changeTabIndex(2)">
      <x-icon slot="icon" type="ios-build" size="30"></x-icon>
      <span slot="label">工作台</span>
    </tabbar-item>
    <tabbar-item  v-model="tabIndex" @tap="changeTabIndex(3)">
      <x-icon slot="icon" type="ios-person" size="30"></x-icon>
      <span slot="label">个人中心</span>
    </tabbar-item>
  </tabbar>
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
      tabIndex: 0
    };
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
