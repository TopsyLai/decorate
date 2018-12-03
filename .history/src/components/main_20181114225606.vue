<template>


  <tabbar>
    <tabbar-item>
      <ion-icon slot="icon" name="apps"></ion-icon>
      <!-- <img slot="icon" src="../assets/demo/icon_nav_button.png"> -->
      <span slot="label">攻略</span>
    </tabbar-item>
    <tabbar-item show-dot>
      <img slot="icon" src="../assets/demo/icon_nav_msg.png">
      <span slot="label">找人</span>
    </tabbar-item>
    <tabbar-item selected link="/component/demo">
      <img slot="icon" src="../assets/demo/icon_nav_article.png">
      <span slot="label">工作台</span>
    </tabbar-item>
    <tabbar-item badge="2">
      <img slot="icon" src="../assets/demo/icon_nav_cell.png">
      <span slot="label">个人中心</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>