import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class I18nPage extends Component {
  static template = 'I18n'
  static components = {}

  setup() {
    Meta.title('i18n / Internationalization - MetaOWL')
    Meta.description(
      'Add multi-language support to your MetaOWL app with the built-in i18n system.',
    )
  }
}
