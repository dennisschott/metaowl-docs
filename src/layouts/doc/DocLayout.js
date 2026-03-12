import { Component } from '@odoo/owl'
import { AppHeader } from '@components/AppHeader/AppHeader'

export default class DocLayout extends Component {
  static template = 'DocLayout'
  static components = { AppHeader }

  setup() {
    this.links = [
      { href: '/', label: 'Home' },
      { href: '/docs/getting-started', label: 'Getting Started' },
      { href: '/docs/project-structure', label: 'Project Structure' },
      { href: '/docs/routing', label: 'Routing' },
      { href: '/docs/components', label: 'Components' },
      { href: '/docs/store', label: 'Store' },
      { href: '/docs/fetch', label: 'Fetch API' },
      { href: '/docs/meta', label: 'Meta Tags' },
      { href: '/docs/navigation-guards', label: 'Navigation Guards' },
      { href: '/docs/api-reference', label: 'API Reference' },
      {
        href: 'https://github.com/odoo/owl',
        label: 'OWL Framework',
        external: true
      }
    ]

    // Get current path for active state
    this.getCurrentPath = () => {
      return window.location.pathname
    }
  }
}
