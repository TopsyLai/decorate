<template>


  <tabbar>
    <tabbar-item>
      <x-icon  type="android-apps" size="30"></x-icon>
      <span slot="label">攻略</span>
    </tabbar-item>
    <tabbar-item show-dot>
      <!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
      <span slot="label">找人</span>
    </tabbar-item>
    <tabbar-item selected link="/component/demo">
      <!-- <img slot="icon" src="../assets/demo/icon_nav_article.png"> -->
      <span slot="label">工作台</span>
    </tabbar-item>
    <tabbar-item badge="2">
      <!-- <img slot="icon" src="../assets/demo/icon_nav_cell.png"> -->
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
  }
};
</script>
<style>
.weui-tabbar__icon svg {
  width: 100%;
  height: 100%;
}
</style>
