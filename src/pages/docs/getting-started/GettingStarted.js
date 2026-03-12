import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class GettingStarted extends Component {
  static template = 'GettingStarted'
  static layout = 'doc'
  static components = {}

  setup() {
    Meta.title('Getting Started - MetaOWL')
    Meta.description(
      'Learn how to set up MetaOWL and create your first application.',
    )
  }
}
