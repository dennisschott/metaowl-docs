import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class Index extends Component {
  static template = 'Index'
  static layout = 'doc'
  static components = {}

  setup() {
    Meta.title('MetaOWL - The Meta-Framework for Odoo OWL')
    Meta.description(
      'MetaOWL is a modern meta-framework for Odoo OWL on Vite. Discover the documentation and learn how to build powerful web applications with OWL.',
    )
  }
}
