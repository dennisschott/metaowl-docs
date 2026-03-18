import { Component } from '@odoo/owl'

export const Sidebar = class Sidebar extends Component {
  static template = 'Sidebar'
  static props = ['isOpen', 'onClose']

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
      { href: '/docs/layouts', label: 'Layouts' },
      { href: '/docs/error-boundaries', label: 'Error Boundaries' },
      { href: '/docs/i18n', label: 'i18n / Internationalization' },
      { href: '/docs/forms', label: 'Form Handling' },
      { href: '/docs/odoo-service', label: 'Odoo JSON-RPC Service' },
      { href: '/docs/composables', label: 'Composables / Hooks' },
      { href: '/docs/api-reference', label: 'API Reference' },
      {
        href: 'https://github.com/odoo/owl',
        label: 'OWL Framework',
        external: true,
      },
    ]

    this.isActive = (href) => {
      const current = window.location.pathname.replace(/\/$/, '')
      const target = href.replace(/\/$/, '')
      return current === target
    }
  }
}
