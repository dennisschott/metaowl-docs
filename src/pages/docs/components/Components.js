import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class Components extends Component {
  static template = 'Components'
  static components = {}

  setup() {
    Meta.title('Components - MetaOWL')
    Meta.description('Learn how to create and use OWL components in MetaOWL.')
  }
}
