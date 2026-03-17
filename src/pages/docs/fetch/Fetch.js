import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class Fetch extends Component {
  static template = 'Fetch'
  static components = {}

  setup() {
    Meta.title('Fetch API - MetaOWL')
    Meta.description(
      'Learn how to use the Fetch API for HTTP requests in MetaOWL.',
    )
  }
}
