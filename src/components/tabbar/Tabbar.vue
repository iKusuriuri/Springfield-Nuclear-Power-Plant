<template>
  <div id="tab-bar">
    <tab-bar-item path="/home" activeColor="#f8bbd0">
      <img slot="item-icon"
           src="@/assets/img/box.svg">
      <img slot="item-icon-active"
           src="@/assets/img/box_active.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/class" activeColor="#f8bbd0">
      <img slot="item-icon"
           src="@/assets/img/class.svg">
      <img slot="item-icon-active"
           src="@/assets/img/class_active.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" activeColor="#f8bbd0">
      <img slot="item-icon"
           src="@/assets/img/shopcart.svg">
      <img slot="item-icon-active"
           src="@/assets/img/shopcart_active.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="profile" activeColor="#f8bbd0">
      <img slot="item-icon"
           src="@/assets/img/profile.svg">
      <img slot="item-icon-active"
           src="@/assets/img/profile_active.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'
export default {
  name: 'TabBar',
  components: { TabBarItem }
}
</script>

<style scoped>
/* @import '.../assets/css/base.css'; */
#tab-bar {
  display: flex;
  background-color: #e0d8db;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(160, 163, 173, 0.01);
}
</style>
