import { Component } from '@odoo/owl'
import { Meta, getCurrentRoute } from 'metaowl'

export default class Post extends Component {
  static template = 'Post'
  static components = {}

  setup() {
    const route = getCurrentRoute()
    this.slug = route?.params?.slug ?? ''

    Meta.title(`${this.slug} – Dynamic Route Demo | MetaOWL`)
  }
}
