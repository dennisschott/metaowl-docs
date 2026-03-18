import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class Layouts extends Component {
  static template = 'Layouts'
  static components = {}

  setup() {
    Meta.title('Layouts - MetaOWL')
    Meta.description(
      'Share page structures across routes with the MetaOWL layout system.',
    )
  }
}
