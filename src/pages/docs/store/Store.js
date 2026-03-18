import { Component, useState } from '@odoo/owl'
import { Meta, Store } from 'metaowl'

const useDemoStore = Store.define('demo', {
  state: () => ({
    count: 0,
    message: 'Hello from Store!',
  }),
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    reset(state) {
      state.count = 0
    },
    setMessage(state, message) {
      state.message = message
    },
  },
})

const demoStore = useDemoStore()

export default class StorePage extends Component {
  static template = 'Store'
  static components = {}

  setup() {
    if (Meta) {
      Meta.title('Store - MetaOWL')
      Meta.description('Learn how to use state management with MetaOWL Store.')
    }

    // Use useState with the demoStore.state directly
    this.state = useState(demoStore.state)
  }

  increment() {
    demoStore.commit('increment')
  }

  decrement() {
    demoStore.commit('decrement')
  }

  reset() {
    demoStore.commit('reset')
  }
}
