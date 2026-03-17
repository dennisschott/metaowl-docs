import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class Routing extends Component {
  static template = 'Routing'
  static components = {}

  setup() {
    Meta.title('Routing - MetaOWL')
    Meta.description('Learn how to use file-based routing in MetaOWL.')
  }
}
