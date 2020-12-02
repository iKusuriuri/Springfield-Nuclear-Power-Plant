<template>
  <div class="tab-bar-item"
       @click="itemClick"
       :style="activeStyle">
    <slot v-if="!isActive"
          name="item-icon"></slot>
    <slot v-else
          name="item-icon-active"></slot>
    <!-- <div :class="{active: isActive}"> -->
    <!-- v-bind动态绑定style,并抽取到计算属性中 -->
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data () {
    return {
      // isActive: false
    }
  },
  props: {
    path: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: '#f8bbd0' // #69f0ae
    }
  },
  methods: {
    itemClick () {
      // this.$router.replace(this.path)
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? { backgroundColor: this.activeColor } : {}
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active {
  background-color: #f8bbd0;
}
</style>
