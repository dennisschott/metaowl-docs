import { Component, useState } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class MetaDocs extends Component {
  static template = 'Meta'
  static components = {}

  setup() {
    Meta.title('Meta Tags - MetaOWL')
    Meta.description('Learn how to manage meta tags for SEO in MetaOWL.')

    this.state = useState({
      inputTitle: 'New Page Title',
      inputDescription: 'This is a new description for the page.',
      currentTitle: '',
      currentDescription: '',
    })

    this.setMetaTags = () => {
      Meta.title(this.state.inputTitle)
      Meta.description(this.state.inputDescription)

      this.state.currentTitle = document.title
      this.state.currentDescription =
        document.querySelector('meta[name="description"]')?.content || ''
    }

    this.resetMetaTags = () => {
      Meta.title('Meta Tags - MetaOWL')
      Meta.description('Learn how to manage meta tags for SEO in MetaOWL.')

      this.state.currentTitle = document.title
      this.state.currentDescription =
        document.querySelector('meta[name="description"]')?.content || ''
    }
  }
}
