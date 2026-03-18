import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class Forms extends Component {
  static template = 'Forms'
  static components = {}

  setup() {
    Meta.title('Form Handling - MetaOWL')
    Meta.description(
      'Build validated forms with useForm() in MetaOWL.',
    )
  }
}
