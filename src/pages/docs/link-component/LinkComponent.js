import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class LinkComponent extends Component {
  static template = 'LinkComponent'
  static components = {}

  setup() {
    Meta.title('Link Component - MetaOWL')
    Meta.description(
      'Learn how to use the Link component for SPA-style navigation in MetaOWL.',
    )
  }
}
