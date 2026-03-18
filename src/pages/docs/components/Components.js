import { Component, useState } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class Components extends Component {
  static template = 'Components'
  static components = {}

  setup() {
    if (Meta) {
      Meta.title('Components - MetaOWL')
      Meta.description('Learn how to create and use OWL components in MetaOWL.')
    }

    this.state = useState({
      buttonLabel: 'Click me!',
      clickCount: 0,
      isPrimary: true,
      buttonStyle: 'primary',
    })

    this.handleClick = () => {
      this.state.clickCount++
    }

    this.toggleStyle = () => {
      this.state.buttonStyle =
        this.state.buttonStyle === 'primary' ? 'secondary' : 'primary'
      this.state.isPrimary = !this.state.isPrimary
    }

    this.resetCount = () => {
      this.state.clickCount = 0
    }
  }
}
