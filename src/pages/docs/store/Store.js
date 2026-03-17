import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class Store extends Component {
  static template = 'Store'
  static components = {}

  setup() {
    Meta.title('Store - MetaOWL')
    Meta.description('Learn how to use state management with MetaOWL Store.')
  }
}
