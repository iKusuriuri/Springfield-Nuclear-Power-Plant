<template>
  <div id="app">
    <router-view />
    <tab-bar></tab-bar>
    <div>
      <button @click="plus">+</button>
      <button @click="aPlus">async +</button>
      <button @click="minus">-</button>
      <button @click="pow(2)">P</button>
      <!-- <h3>{{$store.state.counter}}</h3> -->
      <h3>{{counter}}</h3>
      <h3>{{powerCounter}}</h3>
      <h3>{{cubeCounter}}</h3>
      <h3>plus:{{opeCounter("+")}}</h3>
      <h3>Minus:{{opeCounter("-")}}</h3>
      <h3>Multiplication:{{opeCounter("*")}}</h3>
      <h3>Division:{{opeCounter("/")}}</h3>
      <br>
      <h3>pow:{{powCounter(2.4)}}</h3>
    </div>
  </div>
</template>

<script>
import TabBar from './components/tabbar/Tabbar'
export default {
  name: 'App',
  components: {
    TabBar
  },
  computed: {
    counter () {
      return this.$store.state.counter
    },
    powerCounter () {
      return this.$store.getters.powerCounter
    },
    opeCounter (ope) {
      return this.$store.getters.opeCounter
    },
    powCounter (power) {
      return this.$store.getters.powCounter
    },
    cubeCounter () {
      return this.$store.getters.cubeCounter
    }
  },
  methods: {
    plus () {
      this.$store.commit('increment')
    },
    aPlus () {
      // this.$store.dispatch('aPlus', {
      //   message: 'async method called',
      //   success: () => { console.log('async method called finished') }
      // })
      this.$store.dispatch('aPlus', 'method called').then(resolve => {
        console.log(resolve)
      })
    },
    minus () {
      this.$store.commit('decrement')
    },
    // button click P
    pow (power) {
      // 普通提交
      // this.$store.commit('power', power)
      // 特殊提交
      this.$store.commit({
        type: 'power',
        power
      })
    }
  }
}
</script>

<style>
</style>
