import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: {
    firstName: 'Ralph',
    lastName: 'C',
    age: 26
  },
  mutations: {
    setName (state, payload) {
      state.name = payload
    }
  },
  actions: {},
  getters: {
    fullName (state) {
      return state.firstName + state.lastName
    },
    combined (state, getters, rootState) {
      return getters.fullName + state.age + rootState.counter
    }
  }
}

export default new Vuex.Store({
  // 单一状态树 single source of truth
  state: {
    counter: 3
  },
  mutations: {
    // commit method
    // 会传输state，参数payload可以是对象类型 const obj = {...}
    // mutations 中不要操作异步方法 devtools无法准确跟踪（setTimeout模拟异步）用action替代
    increment (state) {
      state.counter++
    },
    decrement (state) {
      state.counter--
    },
    // power (state, power) {
    //   state.counter = Math.pow(state.counter, power)
    // }
    power (state, payload) {
      state.counter = Math.pow(state.counter, payload.power)
    }
    // Vue.set, Vue.delete 实现响应式的对象新增和删除
  },
  // 用action实现异步操作
  actions: {
    aPlus (context, payload) {
      // setTimeout(() => {
      //   context.commit('increment')
      //   console.log(payload.message)
      //   payload.success()
      // }, 1000)
      console.log(context)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('increment')
          console.log(payload)
          // console.log(payload.message)
          // payload.success()
          resolve('resolve returns')
        }, 1000)
      })
    }
  },
  // 类似组件的computed属性 可以传入getter本身
  getters: {
    powerCounter (state) {
      return state.counter * state.counter
    },
    // error this.$store.getters.powCounter is not a function
    powCounter (state) {
      return function (power) {
        return Math.pow(state.counter, power)
      }
    },
    opeCounter (state) {
      return function (ope) {
        switch (ope) {
          case '+': {
            return state.counter + state.counter
          }
          case '-': {
            return state.counter - state.counter
          }
          case '*': {
            return state.counter * state.counter
          }
          case '/': {
            return state.counter / state.counter
          }
          default: {
            return 'ope error'
          }
        }
      }
    },
    cubeCounter (state, getters) {
      return getters.powerCounter * state.counter
    }
  },
  // 解决单一状态树臃肿的问题
  modules: {
    a: moduleA
    // 组件中获取 $store.state.name
  }
})

const obj = {
  name: 'Ralph',
  age: 26
}
// es6对象的解构
// eslint-disable-next-line no-unused-vars
const { name, age } = obj
