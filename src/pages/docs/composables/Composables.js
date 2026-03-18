import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class Composables extends Component {
  static template = 'Composables'
  static components = {}

  setup() {
    Meta.title('Composables / Hooks - MetaOWL')
    Meta.description(
      'Reusable OWL hooks for auth, localStorage, data fetching and more in MetaOWL.',
    )
  }
}
