import { Component, useState } from '@odoo/owl'
import { Meta, router } from 'metaowl'

export default class Routing extends Component {
  static template = 'Routing'
  static components = {}

  setup() {
    Meta.title('Routing - MetaOWL')
    Meta.description('Learn how to use file-based routing in MetaOWL.')

    this.state = useState({
      currentPath: router.current?.path || window.location.pathname,
      pathInput: '/docs/store',
      history: [],
    })

    this.navigateTo = () => {
      const path = this.state.pathInput
      router.push(path)
      this.state.currentPath = path
      this.state.history = [...this.state.history, { action: 'push', path }]
    }

    this.replaceTo = () => {
      const path = this.state.pathInput
      router.replace(path)
      this.state.currentPath = path
      this.state.history = [...this.state.history, { action: 'replace', path }]
    }

    this.goBack = () => {
      router.back()
      this.state.history = [
        ...this.state.history,
        { action: 'back', path: 'previous' },
      ]
    }
  }
}
