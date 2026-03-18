import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class OdooService extends Component {
  static template = 'OdooService'
  static components = {}

  setup() {
    Meta.title('Odoo JSON-RPC Service - MetaOWL')
    Meta.description(
      'Connect to Odoo backends with the built-in JSON-RPC client in MetaOWL.',
    )
  }
}
