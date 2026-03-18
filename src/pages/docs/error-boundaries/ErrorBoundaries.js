import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class ErrorBoundaries extends Component {
  static template = 'ErrorBoundaries'
  static components = {}

  setup() {
    Meta.title('Error Boundaries - MetaOWL')
    Meta.description(
      'Handle runtime errors gracefully with MetaOWL Error Boundaries.',
    )
  }
}
