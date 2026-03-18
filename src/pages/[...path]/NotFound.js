import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class NotFound extends Component {
  static template = 'NotFound'
  static components = {}

  setup() {
    Meta.title('404 – Page Not Found | MetaOWL')
  }
}
