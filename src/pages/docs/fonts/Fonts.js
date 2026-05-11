import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class Fonts extends Component {
  static template = 'Fonts'
  static components = {}

  setup() {
    Meta.title('Fonts - MetaOWL')
    Meta.description(
      'Font optimization utilities for font loading, preloading, and font display handling.',
    )
  }
}
