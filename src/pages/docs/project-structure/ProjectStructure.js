import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class ProjectStructure extends Component {
  static template = 'ProjectStructure'
  static layout = 'doc'
  static components = {}

  setup() {
    Meta.title('Project Structure - MetaOWL')
    Meta.description(
      'Understand the MetaOWL project structure and file organization.',
    )
  }
}
