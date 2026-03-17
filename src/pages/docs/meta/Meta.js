import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class MetaDocs extends Component {
  static template = 'Meta'
  static components = {}

  setup() {
    Meta.title('Meta Tags - MetaOWL')
    Meta.description('Learn how to manage meta tags for SEO in MetaOWL.')
  }
}
