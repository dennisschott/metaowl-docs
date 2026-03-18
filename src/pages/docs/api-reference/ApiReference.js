import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class ApiReference extends Component {
  static template = 'ApiReference'
  static components = {}

  setup() {
    if (Meta) {
      Meta.title('API Reference - MetaOWL')
      Meta.description('Complete API reference for MetaOWL framework.')
    }
  }
}
