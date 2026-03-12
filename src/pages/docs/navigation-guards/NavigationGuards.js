import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class NavigationGuards extends Component {
  static template = 'NavigationGuards'
  static layout = 'doc'
  static components = {}

  setup() {
    Meta.title('Navigation Guards - MetaOWL')
    Meta.description(
      'Learn how to protect routes with navigation guards in MetaOWL.',
    )
  }
}
